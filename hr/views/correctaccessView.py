from hr.models.correct_access import CorrectAccess
from ..serializers import *
from ..permissions import *

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

class CorrectAccessViewSet(APIView):
    # permission_classes = (AllowAnyUserPermission,)
    def get_permissions(self):
        if self.request.method == 'GET':
            permission_classes = [AllowAnyUserPermission]
        else:
            permission_classes = [AdminPermission]
        return [permission() for permission in permission_classes]
        
    def get(self, request):
        correct_access  = CorrectAccess.objects.all().order_by('-id')
        serializer = CorrectAccessSerializer(correct_access, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
