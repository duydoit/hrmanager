from rest_framework import serializers
from hr.models.approval import Approval
from hr.models.employee import Employee
class ApprovalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Approval
        fields = '__all__' 
        extra_kwargs = {
            'approver_id': {'read_only': True}
        }

    def to_representation(self, instance):
        ret = super(ApprovalSerializer, self).to_representation(instance)
        ret.update({'employee_name':Employee.objects.get(id = ret['employee']).name})
        approver_name = {'approver_name': ''}
        owner_id = {"owner_id": ''} 
        if(ret['approver']):
            employee = Employee.objects.get(id=int(ret['approver']))
            if(employee): 
                approver_name = {'approver_name': employee.name}
                owner_id = {"owner_id": employee.owner.id} 
        ret.update(approver_name)
        ret.update(owner_id)
        return ret