from django.shortcuts import render
from .models import Student

def index(request):
    student = Student.objects.all()
    return render(request, 'blog/index.html', {
        "students": student,
    })