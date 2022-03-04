from celery import shared_task
from celery.schedules import crontab
from datetime import date
from hr.models.timekeeper import Timekeeper
from hr.models.employee import Employee
from hr.models.correct_access import CorrectAccess
from hr.models.approval import Approval
from django.core.mail import send_mail
from django.conf import settings

@shared_task(bind=True)
def update_correct_access(self):
    today = date.today()
    employee = Employee.objects.filter(status= True)
    isApproval = False
    for emp in employee:
        timekeep = Timekeeper.objects.filter(days = today, employee=emp.id).order_by('-timecheck')
        timeOfEmployee = []
        start_time = end_time = 0
        for time in timekeep:
            timeOfEmployee.append(time)
        if len(timeOfEmployee) == 1:
            start_time =  timeOfEmployee[0].timecheck
            end_time =  timeOfEmployee[0].timecheck
        elif len(timeOfEmployee) > 1:
            start_time =  timeOfEmployee[len(timeOfEmployee) - 1].timecheck
            end_time =  timeOfEmployee[0].timecheck
        approval = Approval.objects.filter(employee=emp.id,date_approved= today,status="approve").first()
        if approval:
            isApproval = True
        #Kiểm tra sự tồn tại của bảng
        if CorrectAccess.objects.filter(today = today, employee=emp.id):
            correctaccess = CorrectAccess.objects.get(today = today, employee=emp.id)
            check_start = check_end = 0
            if correctaccess.time_in_days:
                check_start = correctaccess.time_in_days
            if correctaccess.time_out_days:
                check_end = correctaccess.time_out_days
            if check_start != start_time or check_end != end_time or correctaccess.is_approval != isApproval:
                correctaccess.time_in_days = start_time
                correctaccess.time_out_days = end_time
                correctaccess.is_approval = isApproval
                correctaccess.save()
        else:
            if start_time == 0 or end_time == 0:
                data = CorrectAccess(employee = emp, today = today,is_approval = isApproval )
                data.save()
            else:
                data = CorrectAccess(employee = emp, today = today,time_in_days = start_time,time_out_days = end_time,is_approval=isApproval)
                data.save()
    return "done update 23:30 every today"

@shared_task(bind=True)
def send_email_check_timekeep(self):
    today = date.today()
    employee = Employee.objects.filter(status= True)
    recipient_list = []
    for emp in employee:
            correctaccess = CorrectAccess.objects.filter(today = today, employee=emp.id, send_email=True, is_approval=False)
            for cr in correctaccess: 
                recipient_list.append(cr.employee.email)
    subject = 'Quên chấm công này' + today.strftime("%d-%m-%y")
    message = 'Chào bạn' + "! Bạn đa đã quên chấm công ngày" + today.strftime("%d-%m-%y")
    email_from = settings.EMAIL_HOST_USER        
    send_mail( subject, message, email_from, recipient_list,fail_silently=False )
    return "done send email check timekeep"