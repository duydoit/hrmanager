from django.db import models
from hr.models.employee import Employee
from datetime import datetime

class CorrectAccess(models.Model):
    employee = models.ForeignKey(Employee,on_delete = models.CASCADE)
    today = models.DateField()
    time_out_days = models.DateTimeField(null=True, blank=True)
    time_in_days = models.DateTimeField(null=True, blank=True)
    work_days = models.FloatField(default=0)
    
    is_approval = models.BooleanField(default= False)
    send_email = models.BooleanField(default= False)
    
    def __str__(self):
        return self.employee.name

    def save(self):
        timenow = datetime.now()
        morning_check = datetime.strptime(timenow.strftime("%Y-%m-%d 01:00:00"), '%Y-%m-%d %H:%M:%S')
        afternoon_check = datetime.strptime(timenow.strftime("%Y-%m-%d 10:30:00"), '%Y-%m-%d %H:%M:%S')
        if self.is_approval == False:
            if self.time_in_days and self.time_out_days:
                time_in = datetime.strptime(self.time_in_days.strftime("%Y-%m-%d %H:%M:%S"), '%Y-%m-%d %H:%M:%S')
                time_out = datetime.strptime(self.time_out_days.strftime("%Y-%m-%d %H:%M:%S"), '%Y-%m-%d %H:%M:%S')
                if time_in == time_out:
                    self.work_days = 0.0
                    self.send_email = True
                elif time_in < morning_check and time_out > afternoon_check:
                    self.work_days = 1.0
                elif time_in > morning_check or time_out < afternoon_check:
                    self.work_days = 0.5
                else:
                    self.work_days = 0.0
                    self.send_email = True
            else:
                self.work_days = 0.0
                self.send_email = True
        else:
            self.work_days = 1.0
            self.send_email = False

        super(CorrectAccess, self).save()