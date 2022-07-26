
# api/urls.py

from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenRefreshView,
    TokenObtainPairView,
)

urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('register/', views.EndPoint, name='register'),
    path('', views.getRoutes),
    path('homepage/', views.HomePage, name='homepage'),
]