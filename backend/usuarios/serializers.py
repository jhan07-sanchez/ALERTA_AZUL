from rest_framework import serializers
from .models import Usuario
from django.contrib.auth import authenticate


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id', 'correo', 'nombre', 'apellido', 'telefono', 'rol']
        


class RegistroSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    
    class Meta:
        model = Usuario
        fields = ['correo', 'nombre', 'apellido', 'telefono', 'rol', 'password']
        
    def create(self, validated_data):
        return Usuario.objects.create_user(**validated_data)
    

class LoginSerializer(serializers.Serializer):
    correo = serializers.EmailField()
    password = serializers.CharField()
    
    def validate(self, data):
        usuario = authenticate(correo=data['correo'], password=data['password'])
        if usuario and usuario.is_active:
            return usuario
        raise serializers.ValidationError("Credenciales invalidas")
            
        