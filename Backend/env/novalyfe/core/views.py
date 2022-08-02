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
        todos = ToDo.objects.get(id=id, user=user)
        print(todos)
        if not todos:
            return Response(
                {"res": "Object with todo id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )
        serializer_class = ToDoSerializer(todos)
        return Response(serializer_class.data, status=status.HTTP_200_OK)

class editToDo(APIView):
    serializer_class = ToDoSerializer
    permission_classes = [IsAuthenticated]

    def put(self, request, id, *callback_args, **callback_kwargs):
        data = request.data
        name = data['name']
        description = data['description']
        startdate = data['startdate']
        duedate = data['duedate']
        user = request.user
        
        todo = ToDo.objects.filter(id=id).update(name=name, description=description, start_date=startdate, due_date=duedate, user=user)

        todo.save()
        return Response(status=status.HTTP_200_OK)

class deleteToDo(APIView):
    serializer_class = ToDoSerializer
    permission_classes = [IsAuthenticated]

    def delete(self, request, id, *args, **kwargs):
        data = request.data
        user = request.user
        todo = ToDo.objects.get(id=id)
        todo.delete()
        if not todo:
            return Response(
                {"res": "Object with id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer_class = ToDoSerializer(ToDo)
        return Response(serializer_class.data, status=status.HTTP_200_OK)

class createToDo(APIView):
    serializer_class = ToDoSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request):
        data = request.data
        name = data['name']
        description = data['description']
        startdate = data['startdate']
        duedate = data['duedate']
        user = request.user
        
        todo = ToDo.objects.create(name=name, description=description, start_date=startdate, due_date=duedate, user=user)
        todo.save()

        return Response(status=status.HTTP_200_OK)

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


@api_view(['GET', 'POST', 'PUT', 'DELETE'])
@permission_classes((IsAuthenticated,))
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/',
        '/api/prediction/',
        '/api/weatherpage',
        '/api/todos/create',
        '/api/edit/:id/',
        '/api/delete/:id/',
    ]
    return Response(routes)



@api_view(['GET', 'POST', 'PUT', 'DELETE'])
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

