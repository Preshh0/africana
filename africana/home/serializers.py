from rest_framework import serializers
from .models import AddPictures, UserProfile


class AddPicturesSerializer(serializers.Serializer):

    class Meta:
        model = AddPictures
        fields = AddPictures.objects.all()

class UserProfileSerializer(serializers.Serializer):
    class Meta:
        model = UserProfile
        fields = UserProfile.objects.all()