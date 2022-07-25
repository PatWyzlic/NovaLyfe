
from django.urls import re_path # For Django 4.0+
from . import views

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    re_path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    re_path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    re_path('register/', views.RegisterView.as_view(), name='auth_register'),
    re_path('test/', views.testEndPoint, name='test'),
    re_path('', views.getRoutes)
]