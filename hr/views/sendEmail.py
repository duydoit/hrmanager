from tkinter.messagebox import RETRY
from rest_framework.views import APIView
from rest_framework.response import Response
from hr.models.employee import Employee
from hr.models.correct_access import CorrectAccess
from datetime import date
from django.core.mail import send_mail
from django.conf import settings
class TestEmail(APIView):
    def get(self,request, *args, **kwargs):
        today = date.today()
        employee = Employee.objects.filter(status= True)
        recipient_list = []
        for emp in employee:
            correctaccess = CorrectAccess.objects.filter(today = today, employee=emp.id, send_email=True, is_approval=False)
            for cr in correctaccess: 
                recipient_list.append(cr.employee.email)
        subject = 'Quên chấm công này ' + today.strftime("%d-%m-%y")
        message = 'Chào bạn' + "! Bạn đa đã quên chấm công ngày " + today.strftime("%d-%m-%y")
        email_from = settings.EMAIL_HOST_USER        
        send_mail( subject, message, email_from, recipient_list,fail_silently=False )
        return Response({"test":"done"})