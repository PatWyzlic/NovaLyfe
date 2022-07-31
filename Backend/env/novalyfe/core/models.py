from django.db import models
from django.contrib.auth.models import User
import uuid

# Create your models here.

USER_TYPE_CHOICES = (
        ('0','Admin'), ('1','Normal')
)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    created_date = models.DateField(auto_now_add=True)
    user_type = models.TextChoices('Admin', 'Normal')
    name = models.CharField(max_length=100)
    user_type_choices = models.CharField(max_length=20, choices=USER_TYPE_CHOICES, default='Normal')
    profile_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    def __str__(self):
        return f"{self.user}"

class ToDo(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    created_date = models.DateField(auto_now_add=True)
    start_date = models.DateField()
    due_date = models.DateField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    todo_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    def __str__(self):
        return f'{self.name}'

COLOR_CHOICES = (
        ('0','Black'), ('1','White'), ('2','Blue'), ('3','Red'),
        ('4','Green'), ('5','Brown'), ('6','Grey'), ('7','Pink'),
        ('8','Purple'), ('9','Orange'), ('10','Yellow'),('11','Darkolive'),
        ('12','Lightpink'),('13','Lightblue'),
    )

class RoutineItem(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    created_date = models.DateField(auto_now_add=True)
    start_date = models.DateField()
    due_date = models.DateField()
    repetition_amount = models.IntegerField()
    color = models.CharField(max_length=5, choices=COLOR_CHOICES, default='Black')
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    routine_item_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    def __str__(self):
        return f'{self.name}'

class Animal(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    color = models.CharField(max_length=25)
    breed = models.CharField(max_length=40)
    user = models.ForeignKey(User, on_delete=models.CASCADE),
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    animal_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    def __str__(self):
        return f'{self.name}'