from django.urls import path

from .views import InstantMessageListAPIView, InstantMessageDetailAPIView

urlpatterns = [
    path('<int:pk>/', InstantMessageDetailAPIView.as_view(), name='instantMessage_detail'),
    path('', InstantMessageListAPIView.as_view(), name="instantMessage_list"),

]
