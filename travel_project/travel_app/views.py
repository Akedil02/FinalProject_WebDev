from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import Tour
from .serializers import TourSerializer

@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def tour_list(request):
    tours = Tour.objects.filter(user=request.user)
    serializer = TourSerializer(tours, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def create_tour(request):
    serializer = TourSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([permissions.IsAuthenticated])
def tour_detail(request, pk):
    try:
        tour = Tour.objects.get(pk=pk, user=request.user)
    except Tour.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = TourSerializer(tour)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = TourSerializer(tour, data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        tour.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)