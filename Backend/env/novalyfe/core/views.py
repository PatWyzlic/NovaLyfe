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

    def get(self, request):
        user = request.user
        todos = user.todo_set.all()
        serializer = ToDoSerializer(todos, many=True)
    
        return Response(serializer.data)

class getToDo(APIView):
    serializer_class = ToDoSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, id, *callback_args, **callback_kwargs):
        data = request.data
        user = request.user
        print(user)
        print('prints:')
        print(data)

        todos = ToDo.objects.get(id=id, user=user)
        print(todos)
        if not todos:
            return Response(
                {"res": "Object with todo id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )
        serializer_class = ToDoSerializer(todos)
        return Response(serializer_class.data, status=status.HTTP_200_OK)

class createToDo(APIView):
    serializer_class = ToDoSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request):
        data = request.data
        name = data['name']
        description = data['description']
        start_date = data['start_date']
        due_date = data['due_date']
        user = request.user
        
        todo = ToDo.objects.create(name=name, description=description, user=user)
        todo.save()

        return Response({'success': 'Added to do successfully'})

class RoutineView(APIView):
    serializer_class = ToDoSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        routines = user.routineitem_set.all()
        serializer = RoutineItemSerializer(routines, many=True)
    
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
        '/api/weatherpage',
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

def WeatherPage(request):
    return render(request, 'WeatherPage')

