from django.db import models
from django.contrib.auth.models import User

class Film(models.Model):
    name = models.CharField(max_length=100)
    year = models.IntegerField(blank=True, null=True)
    message = models.CharField(max_length=500, blank=True)
    owner = models.ForeignKey(
        User, related_name="films", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
