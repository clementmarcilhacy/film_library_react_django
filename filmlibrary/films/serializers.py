from rest_framework import serializers
from films.models import Film 

# Film Serializer
class LeadSerializer(serializers.ModelSerializer):
  class Meta:
    model = Film 
    fields = '__all__'