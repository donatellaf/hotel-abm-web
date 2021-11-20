from django.db import models


class Cliente(models.Model):
    documento = models.CharField(max_length=8)
    nombre = models.TextField()
    direccion = models.TextField()
    localidad = models.TextField()
    observacion = models.TextField()


class Vendedor(models.Model):
    documento = models.CharField(max_length=8)
    nombre = models.TextField()
    telefono = models.TextField()
    direccion = models.TextField(null=True)
    localidad = models.TextField()
    sueldo = models.IntegerField()
    observacion = models.TextField()


class Habitacion(models.Model):
    nroCamas = models.IntegerField()
    descripcion = models.TextField()
    precio = models.IntegerField()
    tipo = models.TextField()
    observacion = models.TextField()
