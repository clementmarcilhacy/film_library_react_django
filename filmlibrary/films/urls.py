from rest_framework import routers
from .api import LeadViewSet

router = routers.DefaultRouter()
router.register('api/films', LeadViewSet, 'films')

urlpatterns = router.urls