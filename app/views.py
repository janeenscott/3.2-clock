from django.shortcuts import render
from django.views.generic import TemplateView


class Clock(TemplateView):
    template_name = 'base.html'
