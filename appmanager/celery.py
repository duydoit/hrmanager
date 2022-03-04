from __future__ import absolute_import, unicode_literals
import os
from celery import Celery
from celery.schedules import crontab
# setting the Django settings module.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'appmanager.settings')
app = Celery('appmanager')
app.config_from_object('django.conf:settings', namespace='CELERY')

# Celery beat settings
app.conf.beat_schedule = {
    #update correct_access.
    'update_corret_access': {
        'task': 'hr.tasks.update_correct_access',
        'schedule': crontab(hour=22, minute=30, day_of_week='mon,tue,wed,thu,fri'),
    },

    #send_email
    'send_email_every_day':{
        'task': 'hr.tasks.send_email_check_timekeep',
        'schedule': crontab(hour=23, minute=37, day_of_week='mon,tue,wed,thu,fri'),
    }
}

# Looks up for task modules in Django applications and loads them
app.autodiscover_tasks()

@app.task(bind=True)
def debug_task(self):
    print(f'Request: {self.request!r}')