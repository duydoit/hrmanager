# Generated by Django 3.2.12 on 2022-03-03 08:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hr', '0019_alter_approval_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='approval',
            name='title',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
