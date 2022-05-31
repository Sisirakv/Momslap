
from logging import PlaceHolder
from tkinter import Widget
from django import forms
from django.forms.widgets import SelectMultiple, TextInput, Textarea, EmailInput, CheckboxInput,URLInput, Select, NumberInput, RadioSelect, FileInput,ClearableFileInput

from .models import Contact


class reviewForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields= '__all__'
        widgets= {
            'name': TextInput(attrs={'class':'form-control','placeholder':'Name','required':'required','autocomplete':'off',}),
            'email': EmailInput(attrs={'class':'form-control','placeholder':'Email','required':'required','autocomplete':'off',}),
            'Review':Textarea(attrs={'class':'form-control','placeholder':'Your Review','required':'required','autocomplete':'off',})
        }