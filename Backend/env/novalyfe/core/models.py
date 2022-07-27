import email
import profile
from django.db import models
from django.contrib.auth.models import User

COLOR_CHOICES = (
        ('0','Black'), ('1','White'), ('2','Blue'), ('3','Red'),
        ('4','Green'), ('5','Brown'), ('6','Grey'), ('7','Pink'),
        ('8','Purple'), ('9','Orange'), ('10','Yellow'),('11','Darkolive'),
        ('12','Lightpink'),('13','Lightblue'),
    )

# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    created_date = models.DateField(auto_now_add=True)
    user_type = models.TextChoices('Admin', 'Normal')
    email = models.EmailField(max_length = 254)
    

    def __str__(self):
        return f"The name is {self.user} and is {self.user_type}"

class ToDo(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    created_date = models.DateField(auto_now_add=True)
    start_date = models.DateField()
    due_date = models.DateField()
    color = models.CharField(max_length=5, choices=COLOR_CHOICES, default='Black')
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name}'

class RoutineItem(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    created_date = models.DateField(auto_now_add=True)
    start_date = models.DateField()
    due_date = models.DateField()
    repetition_amount = models.IntegerField()
    color = models.CharField(max_length=5, choices=COLOR_CHOICES, default='Black')
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name}'

class Animal(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    color = models.CharField(max_length=25)
    breed = models.CharField(max_length=40)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name}'