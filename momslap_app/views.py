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
        "testimonial" : testimonials,
        "banner" : banner,

    }
    return render(request, 'home.html',context)



def about(request):
    return render(request, 'about.html')

def service(request):
    return render(request, 'facilities.html')

def team(request):
    doctors = Doctors.objects.all()
    context = {
        "doctors" : doctors,
    }
    return render(request, 'team.html', context)

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
    image = Gallery.objects.all()
    context = {
        "image" : image,
    }
    return render(request, 'gallery.html', context)


def package(request):
    
    v_package = "Vip"
    n_package = "Normal"
    vip_package = Package.objects.filter(package_type=v_package)
    print(vip_package)
    # print(package)
    normal_package = Package.objects.filter(package_type=n_package)
    print(normal_package)
    context = {
        "normal" : normal_package,
        "vip" : vip_package,
    }
    return render(request, 'facilities.html',context)