from django.db import models

from versatileimagefield.fields import VersatileImageField
from tinymce.models import HTMLField

# Create your models here.

class Banner(models.Model):
    banner_video = models.FileField(upload_to='videos_uploaded',null=True,)
    title = models.CharField(max_length=200)

class Doctors(models.Model):
    image = VersatileImageField('Image',upload_to='images/testimagemodel/')
    name = models.CharField(max_length=200)
    department = models.CharField(max_length=200)
        
    def __str__(self):
        return self.name

class Gallery(models.Model):
    image = VersatileImageField('Image',upload_to='images/testimagemodel/')

    class Meta:
        verbose_name_plural =("Gallery")
    
class Contact(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    Review = models.TextField()

    def __str__(self):
        return self.name

class Testimonial(models.Model):
    image = VersatileImageField('Image',upload_to='images/testimagemodel/')
    name = models.CharField(max_length=200)
    review = models.TextField()
        
    def __str__(self):
        return self.name

class Package(models.Model):
    PACKAGE_TYPE_CHOICES = (('Vip','vip'),('Normal','normal'))
    package_type = models.CharField(max_length=200,choices=PACKAGE_TYPE_CHOICES)
    plan_name = models.CharField(max_length=200)
    price = models.IntegerField()
    content = HTMLField()