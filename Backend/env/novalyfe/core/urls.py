
# api/urls.py

from django.urls import path
from . import views
from core.views import *

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('', views.getRoutes),

    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),

    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('register/', views.RegisterView.as_view(), name='auth_register'),

    path('register/', views.EndPoint, name='register'),

    path('todos/', views.ToDoView.as_view(), name="todos"),

    path('todos/<str:id>/', views.getToDo.as_view(), name="todo_view"),

    path('todos/create/', views.createToDo.as_view(), name="todocreate_view"),

    path('routines/', views.RoutineView.as_view(), name="routines"),

    path('weatherpage/', views.WeatherPage, name="weatherpage"),
]