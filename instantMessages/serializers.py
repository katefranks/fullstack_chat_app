from rest_framework import serializers
from .models import InstantMessage

class InstantMessageSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField('get_username') #'get_owner_status'
    has_owner_permissions = serializers.SerializerMethodField('get_owner_status')
    owner = serializers.ReadOnlyField(source='user.username')

# def get_owner_status
    def get_owner_status(self, obj):
        # return obj.username.username
        # import pdb; pdb.set_trace()      #debugger for python
        return obj.username == self.context['request'].user

    def get_username(self, obj):
        return obj.username.username

    class Meta:
        model = InstantMessage
        fields = '__all__'

# username = serializers.ReadObnlyField(source='user.username')


# {
# id: 17
# has_owner_permissions: Boolean (True/False)
# owner: Eric
# message: asdflkj
# time: 2021-10-10
# user: 3
# }

#self.content django serializer
# context is a dictionary- it has request, format, view
