from rest_framework import serializers

from .models import InstantMessage

class InstantMessageSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField('get_username')

    def get_username(self, obj):
        return obj.username.username



    class Meta:
        model = InstantMessage

        fields = '__all__'
