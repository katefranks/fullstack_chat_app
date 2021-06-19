from django.urls import path

from .views import ChatappListAPIView

urlpatterns = [
    path('', ChatappListAPIView.as_view(), name="chatapp_list"),
]
