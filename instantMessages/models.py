from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class InstantMessage(models.Model):
    username = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    # user_name = models.CharField(max_length=225)
    message_text = models.CharField(max_length=225)

    def __str__(self):
        return self.message_text
