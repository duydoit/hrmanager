from hr.models.department import Department
from ..serializers import *
from ..permissions import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create Depaerment Viewsets.
class DepartmentViewSet(APIView):
    def get_permissions(self):
        if self.request.method == 'GET':
            permission_classes = [AllowAnyUserPermission]
        else:
            permission_classes = [AdminPermission]
        return [permission() for permission in permission_classes]

    def get(self, request):
        department  = Department.objects.all().order_by('id')
        serializer = DepartmentSerializer(department, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def post(self, request):
        serializer = DepartmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
class DepartmentDetailView(APIView):
    def get_permissions(self):
        if self.request.method == 'GET':
            permission_classes = [AllowAnyUserPermission]
        else:
            permission_classes = [AdminManagerPermission]
        return [permission() for permission in permission_classes]

    def get_object(self, pk):
        try:
            return Department.objects.get(pk=pk)
        except Department.DoesNotExist:
            raise status.HTTP_404_NOT_FOUND

    def get(self, request, pk, format=None):
        department = self.get_object(pk)
        serializer = DepartmentSerializer(department)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        department = self.get_object(pk)
        serializer = DepartmentSerializer(department,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None):
        department = self.get_object(pk)
        department.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

