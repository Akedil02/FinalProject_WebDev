from django.db import models
from django.contrib.auth.models import User

class Country(models.Model):
    name = models.CharField(max_length=100)

class City(models.Model):
    name = models.CharField(max_length=100)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)

class HotelManager(models.Manager):
    def affordable(self, max_price):
        return self.filter(price__lte=max_price)

class Hotel(models.Model):
    name = models.CharField(max_length=100)
    city = models.ForeignKey(City, on_delete=models.CASCADE)
    stars = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    objects = HotelManager()

class Tour(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    departure_date = models.DateField()
    return_date = models.DateField()