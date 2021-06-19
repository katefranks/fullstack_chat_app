from rest_framework import serializers

from .models import Chatapp

class ChatappSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chatapp
        fields = ('id', 'created_at', 'user_name', 'message_text')
