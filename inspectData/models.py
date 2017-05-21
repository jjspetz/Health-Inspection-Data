# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class RestHealth(models.Model):
    inspection_uid = models.IntegerField()
    inspection_status = models.BooleanField()
    facility_name = models.CharField(max_length=200)
    address_field = models.CharField(max_length=200)
    cuisine = models.CharField(max_length=200)
