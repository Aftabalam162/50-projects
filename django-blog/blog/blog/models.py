from django.db import models


class Student(models.Model):
    class Meta:
        db_table = 'student'

    name = models.CharField(max_length=30)
    age = models.PositiveIntegerField()
    marks = models.PositiveIntegerField()
