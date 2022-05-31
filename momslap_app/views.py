from django.contrib import messages
from django.shortcuts import redirect, render
from .forms import reviewForm

from momslap_app.models import About, Contact, Doctors, Gallery, Home, Testimonial

# Create your views here.

def base(request):
    return render(request, 'base.html')

def home(request):
    data = Home.objects.all()
    return render(request, 'home.html',{'data': data})

def about(request):
    data = About.objects.all()
    return render(request, 'about.html',{'data': data})

def service(request):
    return render(request, 'facilities.html')

def team(request):
    data = Doctors.objects.all()
    return render(request, 'team.html', {'data':data})

def learn(request):
    return render(request,'learn.html')

def specialities(request):
    return render(request, 'specialities.html')

def specialities_2(request):
    return render(request, 'specialities2.html')

def specialities_3(request):
    return render(request, 'specialities3.html')

def testimonial(request):
    review = Testimonial.objects.all()
    return render(request, 'home.html',{'review':review})

def testimonial(request):
    forms = reviewForm(request.POST or None)
    if request.method == "POST":
        if forms.is_valid():
            forms.save()
            messages.info(request, 'Successfully added')
            return redirect('Contact')
    else:
        context= {
            "forms":forms,

        }
    return render(request,'contact.html',context)

def contact(request):
    forms = reviewForm(request.POST or None)
    if request.method == "POST":
        if forms.is_valid():
            forms.save()
            messages.info(request, 'Successfully added')
            return redirect('Contact')
    else:
        context= {
            "forms":forms,

        }
    return render(request,'contact.html',context)

def gallery(request):
    data = Gallery.objects.all()
    return render(request, 'gallery.html', {'data':data})