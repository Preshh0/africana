from django.db import models

# Create your models here.

class UserProfile(models.Model):
    userImage = models.ImageField(upload_to="profileImage")
    firstName = models.CharField(max_length=255)
    lastName = models.CharField(max_length=255)
    pictures = models.ImageField(upload_to="pictures")
    
class AddPictures(models.Model):
    image = models.ImageField(upload_to = "images")
    date_added = models.DateField()
    time_added = models.TimeField()
    user_info = models.CharField(max_length=255)
    image_title = models.CharField(max_length=255)
