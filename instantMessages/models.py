from django.db import models

# Create your models here.
class InstantMessage(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    user_name = models.CharField(max_length=225)
    message_text = models.CharField(max_length=225)

    def __str__(self):
        return self.user_name
