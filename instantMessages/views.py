from rest_framework import generics
from .models import InstantMessage
from .serializers import InstantMessageSerializer
from .permissions import IsAuthOrReadOnly

class InstantMessageListAPIView(generics.ListCreateAPIView):
    queryset = InstantMessage.objects.all()
    serializer_class = InstantMessageSerializer

    def perform_create(self, serializer):
        serializer.save(username=self.request.user)

class InstantMessageDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = InstantMessage.objects.all()
    serializer_class = InstantMessageSerializer
    permission_classes = (IsAuthOrReadOnly,)

#associates the logged in user w/ the message that's getting created.
#self is similar to 'this'

#conf settings- make sure rest framework items are in there.
#add permissions.py

    # you may see permission classes written as a touple (has comma) or lists (difference- a touple is immutable, a list can be updated)
    # permission_classes = (IsAuthorReadOnly,)
    # #
