from momslap_app import views
from django.urls import path



urlpatterns = [

    path('',views.home,name='Home'),
    path('About',views.about,name='About'),
    path('Service',views.packages,name='Service'),
    path('Team',views.team,name='Team'),
    path('Specialities',views.specialities,name='Specialities'),
    path('Specialities_2',views.specialities_2,name='Specialities_2'),
    path('Specialities_3',views.specialities_3,name='Specialities_3'),
    path('Testimonial',views.testimonial,name='Testimonial'),
    path('Contact',views.contact,name='Contact'),
    path('Learn',views.learn,name="Learn"),
    path('Gallery',views.gallery,name="Gallery"),

]
