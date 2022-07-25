
from django.contrib import admin
from django.urls import include, re_path # For Django 4.0+
from core.views import *
  
urlpatterns = [
    re_path('admin/', admin.site.urls),
    re_path("accounts/", include("django.contrib.auth.urls")),
    re_path('wel/', ReactView.as_view(), name="something"),
]