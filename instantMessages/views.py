from rest_framework import generics


from .models import InstantMessage

from .serializers import InstantMessageSerializer

class InstantMessageListAPIView(generics.ListCreateAPIView):
    queryset = InstantMessage.objects.all()
    serializer_class = InstantMessageSerializer

    def perform_create(self, serializer):
        serializer.save(username=self.request.user)
