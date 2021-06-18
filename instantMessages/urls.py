from django.urls import path

from .views import InstantMessageListAPIView

urlpatterns = [
    path('', InstantMessageListAPIView.as_view(), name="instantMessage_list"),
]
