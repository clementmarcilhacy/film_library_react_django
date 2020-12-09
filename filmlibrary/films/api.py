from films.models import Film
from rest_framework import viewsets, permissions
from .serializers import FilmSerializer

# Film Viewset
class FilmViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = FilmSerializer

    def get_queryset(self):
        return self.request.user.films.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
