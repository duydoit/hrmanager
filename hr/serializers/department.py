from rest_framework import serializers
from hr.models.department import Department
from hr.models.employee import Employee

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'
    
    def to_representation(self, instance):
        ret = super(DepartmentSerializer, self).to_representation(instance)
        manager_name = {'department_name':""}
        count = len(Employee.objects.filter(department = ret['id']))
        ret.update({'count':count})
        if(ret['manager']):
            employee = Employee.objects.get(id=int(ret['manager']))
            if(employee): 
                manager_name = {'department_name': employee.name} 
        ret.update(manager_name)
        return ret