# Generated by Django 4.0.2 on 2022-02-27 07:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hr', '0007_correctaccess_time_out_days_department_manager_id_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='department',
            old_name='manager_id',
            new_name='manager',
        ),
    ]
