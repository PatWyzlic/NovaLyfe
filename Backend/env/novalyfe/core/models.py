from pickle import TRUE
from pyexpat import model
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class React(models.Model):
    name = models.CharField(max_length=30)
    detail = models.CharField(max_length=500)

    def __str__(self):
        return f"The name is {self.name} amd is {self.detail}"

class Profile(models.Model):
    address = models. CharField(max_length=100)
    created_date = models.DateField(auto_now_add=TRUE)
    phone_number = models.CharField(max_length=10)
    user = models.OneToOneField(User, on_delete=models. CASCADE)