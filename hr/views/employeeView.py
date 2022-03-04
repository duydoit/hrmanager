from rest_framework import status
from hr.models.employee import Employee
from ..serializers import *
from ..permissions import *
from rest_framework.views import APIView
from rest_framework.response import Response


# Create Employee Viewsets.
class EmployeeViewSet(APIView):
    def get_permissions(self):
        if self.request.method == 'GET':
            permission_classes = [AllowAnyUserPermission]
        else:
            permission_classes = [AdminManagerPermission]
        return [permission() for permission in permission_classes]

    def get(self, request):
        employees  = Employee.objects.all().order_by('id')
        serializer = EmployeeSerializer(employees, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def post(self, request):
        serializer = EmployeeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
       

class EmployeeDetailView(APIView):
    def get_permissions(self):
        if self.request.method == 'GET':
            permission_classes = [AllowAnyUserPermission]
        else:
            permission_classes = [AdminManagerPermission]
        return [permission() for permission in permission_classes]
    
    def get_object(self, pk):
        try:
            return Employee.objects.get(pk=pk)
        except Employee.DoesNotExist:
            raise status.HTTP_404_NOT_FOUND

    def get(self, request, pk, format=None):
        employee = self.get_object(pk)
        serializer = EmployeeSerializer(employee)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        employee = self.get_object(pk)
        serializer = EmployeeSerializer(employee,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None):
        employee = self.get_object(pk)
        employee.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
