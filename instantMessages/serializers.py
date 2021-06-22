from rest_framework import serializers

from .models import InstantMessage

class InstantMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = InstantMessage

        fields = '__all__'
