from django.contrib import messages
from django.shortcuts import redirect, render
from .forms import reviewForm

from momslap_app.models import Banner, Contact, Doctors, Gallery, Testimonial, Package

# Create your views here.

def base(request):
    return render(request, 'base.html')


def home(request):
    banner = Banner.objects.all()
    testimonials = Testimonial.objects.all()
    context = {
        "is_home": True,
        "testimonial" : testimonials,
        "banner" : banner,

    }
    return render(request, 'home.html',context)



def about(request):
    context = {
        "is_about" : True,
    }
    return render(request, 'about.html', context)

def facility(request):
    context = {
        "is_facility" : True,
    }
    return render(request, 'facilities.html', context)

def team(request):
    doctors = Doctors.objects.all()
    context = {
        "is_doctor": True,
        "doctors" : doctors,
    }
    return render(request, 'team.html', context)

def learn(request):
    return render(request,'learn.html')

def specialities(request):
    context = {
        "is_specialities" : True,
    }
    return render(request, 'specialities.html',context)

def specialities_2(request):
    context = {
        "is_specialities" : True,
    }
    return render(request, 'specialities2.html', context)

def specialities_3(request):
    context = {
        "is_specialities" : True,
    }
    return render(request, 'specialities3.html', context)

def testimonial(request):
    review = Testimonial.objects.all()
    return render(request, 'home.html',{'review':review})

def contact(request):
    forms = reviewForm(request.POST or None)
    if request.method == "POST":
        if forms.is_valid():
            forms.save()
            messages.info(request, 'Successfully added')
            return redirect('Contact')
    else:
        context= {
            "is_contact":True,
            "forms":forms,

        }
    return render(request,'contact.html',context)

def gallery(request):
    image = Gallery.objects.all()
    context = {
        "is_gallery":True,
        "image" : image,
    }
    return render(request, 'gallery.html', context)


def package(request):
    
    v_package = "Vip"
    n_package = "Normal"
    vip_package = Package.objects.filter(package_type=v_package)
    normal_package = Package.objects.filter(package_type=n_package)
    context = {
        "is_facility":True,
        "normal" : normal_package,
        "vip" : vip_package,
    }
    return render(request, 'facilities.html',context)