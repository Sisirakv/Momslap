# Generated by Django 4.0.4 on 2022-06-01 09:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('momslap_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='package',
            name='package_type',
            field=models.CharField(choices=[], max_length=200),
        ),
    ]
