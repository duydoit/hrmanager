from hr.models.wage_rate import WageRate
from hr.serializers.wage_rate import WageRateSerializer

from ..serializers import *
from ..permissions import *

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class WageRateViewSet(APIView):
    def get_permissions(self):
        if self.request.method == 'GET':
            permission_classes = [AllowAnyUserPermission]
        else:
            permission_classes = [AdminPermission]
        return [permission() for permission in permission_classes]

    def get(self, request, *args, **kwargs):
        wagerate = WageRate.objects.all()
        serializer = WageRateSerializer(wagerate, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        serializer = WageRateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)