# Generated by Django 4.0.2 on 2022-02-27 08:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hr', '0008_rename_manager_id_department_manager'),
    ]

    operations = [
        migrations.AlterField(
            model_name='timekeeper',
            name='timecheck',
            field=models.DateTimeField(),
        ),
    ]
