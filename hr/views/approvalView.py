from accounts.models import User

from hr.models.approval import Approval
from hr.models.employee import Employee

from ..serializers import *
from ..permissions import *
import jwt
from django.db.models import Q
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


class ApprovalViewSet(APIView):
    permission_classes = [AllowAnyUserPermission]

    def get(self, request, *args, **kwargs):
        getuser = GetUser()
        user = getuser.get_user(request)
        employee = Employee.objects.get(owner = user.id)
       
        approval = Approval.objects.filter(Q(employee=employee) | Q(approver_id=employee)).order_by("-id")
        serializer = ApprovalSerializer(approval, many=True)
        response = Response()
        response.data = serializer.data
        return response
            
        # return Response("Employee does not exit", status=status.HTTP_400_BAD_REQUEST)

    def post(self, request, *args, **kwargs):
        getuser = GetUser()
        user = getuser.get_user(request)
        employee = Employee.objects.get(owner = user.id)
        data = request.data
        data['employee'] = employee.id
        serializer = ApprovalSerializer(data = data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ApprovalDetailView(APIView):
    permission_classes = [AllowAnyUserPermission]
    def get(self, request, pk):
        if id:
            approval = Approval.objects.get(id=pk)
            if approval:
                serializer = ApprovalSerializer(approval)
                response = Response()
                response.data = serializer.data
                return response
        return Response("Approval does not exit", status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        getuser = GetUser()
        user = getuser.get_user(request)
        employee_approval = Employee.objects.get(owner=user.id)
        if employee_approval:
            instance = Approval.objects.get(id = pk)
            if instance:
                is_manager = instance.approver.id
                if is_manager == employee_approval.id:
                    valid_data = ApprovalSerializer(instance, data=request.data)
                    if valid_data.is_valid():
                        valid_data.save()
                        return Response(valid_data.data)
                    return Response(valid_data.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response("Can not approve", status=status.HTTP_400_BAD_REQUEST)
