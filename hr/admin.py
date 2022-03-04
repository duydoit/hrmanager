from django.contrib import admin
from hr.models.timekeeper import Timekeeper
from hr.models.correct_access import CorrectAccess
from hr.models.wage_rate import WageRate
from hr.models.approval import Approval
from hr.models.salary import Salary
from hr.models.department import Department
from hr.models.employee import Employee
from accounts.models import User
# Register your models here.
admin.site.register(Timekeeper)
admin.site.register(CorrectAccess)
admin.site.register(WageRate)
admin.site.register(Approval)
admin.site.register(Salary)
admin.site.register(Department)
admin.site.register(Employee)
admin.site.register(User)