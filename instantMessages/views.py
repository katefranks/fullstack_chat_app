

# Create your views here.

from rest_framework import generics


from .models import InstantMessage
from .serializers import InstantMessageSerializer

class InstantMessageListAPIView(generics.ListAPIView):
    queryset = InstantMessage.objects.all()
    serializer_class = InstantMessageSerializer
