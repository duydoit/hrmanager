# Generated by Django 3.2.12 on 2022-03-03 12:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hr', '0020_alter_approval_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='timekeeper',
            name='timecheck',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
