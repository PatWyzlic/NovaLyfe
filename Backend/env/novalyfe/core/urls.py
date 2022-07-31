
# api/urls.py

from django.urls import path
from . import views
from core.views import *

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('register/', views.EndPoint, name='register'),
    path('', views.getRoutes),
    path('todos/', views.ToDoView.as_view(), name="todos"),
    path('todos/create', views.CreateToDo, name="create-todo"),
    path('edittodo/<str:pk>/', views.ToDoView.as_view(), name="todos"),
    path('routines/', views.RoutineView.as_view(), name="routines"),
]