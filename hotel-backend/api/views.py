from django.shortcuts import render
from api.serializers import ClienteSerializer, RegisterSerializer, HabitacionSerializer, VendedorSerializer
from api.models import Cliente, Vendedor, Habitacion
from rest_framework import viewsets, generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from api.serializers import MeSerializer

# Create your views here.


class ClienteViewSet(viewsets.ModelViewSet):
    serializer_class = ClienteSerializer
    queryset = Cliente.objects.all()


class HabitacionViewSet(viewsets.ModelViewSet):
    serializer_class = HabitacionSerializer
    queryset = Habitacion.objects.all()


class VendedorViewSet(viewsets.ModelViewSet):
    serializer_class = VendedorSerializer
    queryset = Vendedor.objects.all()


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def me(request):
    return Response(MeSerializer(request.user).data, 200)
