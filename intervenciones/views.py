from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

def crear_intervencion(request):
    return render(request, 'crear_intervencion.html')

def pantalla_inicio(request):
    return render(request, 'pantalla_inicio.html')