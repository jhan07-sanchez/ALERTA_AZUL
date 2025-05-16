from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from .models import Usuario
from .serializers import UsuarioSerializer, RegistroSerializer, LoginSerializer
from rest_framework_simplejwt.tokens import RefreshToken




class RegistroAPIView(APIView): 
    permission_classes = [AllowAny]

    def get(self, request):
        return Response({"mensaje": "Endpoint para registrar usuarios. Usa POST con los datos requeridos."})

    def post(self, request):
        serializer = RegistroSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"mensaje": "Usuario registrado correctamente."}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginAPIView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        return Response({"mensaje": "Endpoint para login de usuarios. Usa POST con correo y contraseña."})

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            usuario = serializer.validated_data
            refresh = RefreshToken.for_user(usuario)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'usuario': UsuarioSerializer(usuario).data
            })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
