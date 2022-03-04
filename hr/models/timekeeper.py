
from django.db import models
from hr.models.employee import Employee
from datetime import datetime

class Timekeeper(models.Model):
    employee = models.ForeignKey(Employee, on_delete = models.CASCADE)
    days = models.DateField(auto_now_add=True, null=True, blank=True)
    timecheck = models.DateTimeField(auto_now_add=True,null=True, blank=True)

    def __str__(self):
        return self.employee.name
    