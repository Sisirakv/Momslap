from django.db import models

from versatileimagefield.fields import VersatileImageField

# Create your models here.

class Testimonial(models.Model):
    name = models.CharField(max_length=200)
    review = models.TextField()
        
    def __str__(self):
        return self.name,self.review
    
class Home(models.Model):
    banner_video = models.FileField(upload_to='videos_uploaded',null=True,)
    banner_img = VersatileImageField(upload_to='images/Banner/')
    ayurved_img = VersatileImageField(upload_to='images/facility/')
    food_img = VersatileImageField(upload_to='images/facility/')
    package_img = VersatileImageField(upload_to='images/facility/')
    consulting_img = VersatileImageField(upload_to='images/facility/')
    bistander_img = VersatileImageField(upload_to='images/facility/')
    appartment_img = VersatileImageField(upload_to='images/facility/')
    recommend1_img = VersatileImageField(upload_to='images/facility/')
    recommend2_img = VersatileImageField(upload_to='images/facility/')
    recommend3_img = VersatileImageField(upload_to='images/facility/')
    helping_img = VersatileImageField(upload_to='images/facility/')
    testimonial = models.ForeignKey(Testimonial,on_delete=models.CASCADE, related_name='testimonial')


class About(models.Model):
    image_1 = models.ImageField(upload_to='images_uploaded',null=True)
    image_2 = models.ImageField(upload_to='images_uploaded',null=True)

class Facilities(models.Model):
        video_1 = models.FileField(upload_to='videos_uploaded',null=True,)

class Doctors(models.Model):
    image_1 = VersatileImageField('Image_1',upload_to='images_1/testimagemodel_1/')
    Name = models.CharField(max_length=200)
    Department = models.CharField(max_length=200)
        
    def __str__(self):
        return self.Name

class Gallery(models.Model):
    image = VersatileImageField('Image',upload_to='images/testimagemodel/')
    
class Contact(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    Review = models.TextField()

    def __str__(self):
        return self.name