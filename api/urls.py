from django.urls import path, include

urlpatterns = [
    path('instantMessages/', include('instantMessages.urls')),
]
