

# Create your views here.

from rest_framework import generics


from .models import Chatapp
from .serializers import ChatappSerializer

class ChatappListAPIView(generics.ListAPIView):
    queryset = Chatapp.objects.all()
    serializer_class = ChatappSerializer
