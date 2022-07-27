from django.contrib import admin
from django.contrib.auth.models import User
from .models import Profile, ToDo, RoutineItem, Animal

admin.site.register(Profile)
admin.site.register(ToDo)
admin.site.register(RoutineItem)
admin.site.register(Animal)