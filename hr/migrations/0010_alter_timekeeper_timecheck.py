# Generated by Django 4.0.2 on 2022-02-27 09:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hr', '0009_alter_timekeeper_timecheck'),
    ]

    operations = [
        migrations.AlterField(
            model_name='timekeeper',
            name='timecheck',
            field=models.TimeField(),
        ),
    ]
