from django.db import models
from hr.models.employee import Employee
from hr.models.department import Department
from datetime import datetime 
class Approval(models.Model):
    title = models.CharField(max_length=200,null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    employee = models.ForeignKey(Employee,related_name="employee",null=True, on_delete=models.CASCADE)
    approver = models.ForeignKey(Employee,related_name="approver", null=True, blank=True, on_delete=models.CASCADE)

    STATUS_CHOICE = [('new', 'New'),('approve', 'Approve'),
                            ('cancel', 'Cancel')]
    status = models.CharField(max_length=20, choices=STATUS_CHOICE, default='new')
    date_approved = models.DateField(default=datetime.now)
    
    def __str__(self):
        return self.title

    def save(self,*args, **kwargs):
        emp = Employee.objects.get(id = self.employee.id)
        department = Department.objects.get(id = emp.department.id)
        if emp.parent:
            self.approver = Employee.objects.get(id = emp.parent.id)
        else:
            self.approver = Employee.objects.get(id = int(department.manager))

        super(Approval, self).save(*args, **kwargs)