from rest_framework import serializers
from hr.models.correct_access import CorrectAccess
from hr.models.employee import Employee
class CorrectAccessSerializer(serializers.ModelSerializer):
    class Meta:
        model = CorrectAccess
        fields = '__all__'
    
    def to_representation(self, instance):
        ret = super(CorrectAccessSerializer, self).to_representation(instance)
        employee_id = ret['employee']
        time_out= {"time_out": "null"}
        time_in = {"time_in": "null"}
        if ret['time_out_days']:
            time_out= {"time_out": ret['time_out_days'][11:19] }
        if ret['time_out_days']:
            time_in = {"time_in": ret['time_in_days'][11:19] }
        employee = Employee.objects.filter(id=employee_id).first()
        employee_name = {'employee_name': employee.name} 
        ret.update(employee_name)
        ret.update(time_out)
        ret.update(time_in)
        return ret