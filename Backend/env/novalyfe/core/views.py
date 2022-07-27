# api/views.py

from urllib import request
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import status
from core.serializer import MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated
from . serializer import *
from rest_framework.views import APIView
# Create your views here.

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [AllowAny]
    serializer_class = RegisterSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/',
        '/api/prediction/',
    ]
    return Response(routes)

def AnimalView(request):
    serializer_class = AnimalSerializer
    
    def get(self, request):
        data = [ {"name": data.name, "description": data.description, "color": data.color, "rec_format": data.rec_format, "breed": data.breed} 
        for data in Animal.objects.all()]
        return Response(data)

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