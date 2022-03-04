from hr.models.timekeeper import Timekeeper
from hr.models.employee import Employee
from accounts.models import User
from ..serializers import *
from ..permissions import *
import jwt
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

class GetUser(object):
    def get_user(self, request):
        headers_auth = request.headers.get('Authorization')
        if headers_auth and headers_auth.startswith('Bearer'):
            token = headers_auth.split()[1] if len(headers_auth.split()) > 1 else None
            if token:
                try:
                    payload = jwt.decode(token, "secret", algorithms=["HS256"], encoding='utf-8')
                    id = payload.get('id')
                    user = User.objects.filter(id=id).first()
                    if user:
                        return user
                except jwt.ExpiredSignatureError:
                    return
        return

class TimekeeperViewSet(APIView):
    def get_permissions(self):
        if self.request.method in ['GET','POST']:
            permission_classes = [AllowAnyUserPermission]
        else:
            permission_classes = [AdminPermission]
        return [permission() for permission in permission_classes]
        

    def get(self, request):
        timekeeper  = Timekeeper.objects.all().order_by('-id')
        serializer = TimeKeeperSerializer(timekeeper, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    
    def post(self, request, *args, **kwargs):
        getuser = GetUser()
        user = getuser.get_user(request)
        employee = Employee.objects.get(owner = user.id)
        data = {'employee': employee.id}
        serializer = TimeKeeperSerializer(data = data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)