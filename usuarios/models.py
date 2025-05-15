from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

class UsuarioManager(BaseUserManager):
    def create_user(self, correo, nombre, apellido, telefono, rol, password=None):
        if not correo:
            raise ValueError('El correo debe tener un coerreo electronico')
        correo = self.normalize_email(correo)
        usuario = self.model(
            correo=corrreo,
            nombre=nombre,
            apellido=apellido,
            teleono=telefono,
            rol=rol
        )
        usuario.set_password(password)
        usuario.save(using=self._db)
        return Usuario
    def create_superuser(self, correo, nombre, apellido, telefono, rol='admin', password=None):
        usuario = self.create_user(
            correo,
            nombre,
            apellido,
            telefono,
            rol,
            password
        )
        usuario.is_superuser = True
        usuario.is_staff = True
        usuario.save(using=self._db)
        return usuario
   
class Usuario(AbstractBaseUser, PermissionsMixin):
    ROLES = [
        ('rescatista', 'Rescatista'),
        ('ambientalista', 'Ambientalista'),
        ('biologo', 'Biólogo'),
        ('estudiante', 'estudiante'),
        ('admin', 'Administrador'),
    ]
    
    correo = models.EmailField(unique=True)
    nombre = models.CharField(max_length=30)
    apellido = models.CharField(max_length=30)
    telefono = models.CharField(max_length=15)
    rol = models.CharField(max_length=20, choices=ROLES)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    
    objects = UsuarioManager()
    
    USERNAME_FIELD = 'correo'
    REQUIRED_FIELDS = ['nombre', 'apellido', 'telefono', 'rol']
    
    def __str__(self):
        return f'{self.nombre} {self.apellido} ({self.rol})'
        