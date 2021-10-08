from django.shortcuts import render
from .serializers import AddPicturesSerializer
from rest_framework.response import Response

from rest_framework import serializers, views, status
from .models import AddPictures
from .serializers import AddPicturesSerializer, UserProfileSerializer


class AddPicturesView(views.APIView):
    '''
    Post pictures
    '''
    def post(self, request):
        serializer = AddPicturesSerializer(data=request.data)

        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ViewAddedPictures(views.APIView):
    '''
    View added images
    '''
    def get(self, request,  format=None):
        pictures = AddPictures.objects.all()
        serializer = AddPicturesSerializer(pictures, many=True)
        return Response(serializer.data)