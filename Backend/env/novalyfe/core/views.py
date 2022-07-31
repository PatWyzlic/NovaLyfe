# api/views.py

from urllib import request, response
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import status, viewsets
from core.serializer import MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializer import *
from rest_framework.views import APIView
from . models import *
from .serializer import ToDoSerializer
from core.models import ToDo
# Create your views here.

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [AllowAny]
    serializer_class = RegisterSerializer

class ToDoView(APIView):
    serializer_class = ToDoSerializer
    permission_classes = [IsAuthenticated]
    queryset = ToDo.objects.all()

    def get(self, request):
        user = request.user
        todos = user.todo_set.all()
        serializer = ToDoSerializer(todos, many=True)
    
        return Response(serializer.data)

    
class ProfileView(APIView):
    serializer_class = ProfileSerializer
    permission_classes = [AllowAny]
    queryset = Profile.objects.all()



@api_view(['GET'])
@permission_classes((IsAuthenticated,))
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/',
        '/api/prediction/',
    ]
    return Response(routes)




@api_view(['GET', 'POST'])
@permission_classes((IsAuthenticated,))
def EndPoint(request):
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = request.POST.get('text')
        data = f'Congratulation your API just responded to POST request with text: {text}'
        return Response({'response': data}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)


def HomePage(request):
    return render(request, 'HomePage')

def RegisterPage(request):
    return render(request, 'RegisterPage')