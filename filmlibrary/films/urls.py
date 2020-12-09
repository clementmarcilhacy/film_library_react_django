from rest_framework import routers
from .api import FilmViewSet

router = routers.DefaultRouter()
router.register('api/films', FilmViewSet, 'films')

urlpatterns = router.urls