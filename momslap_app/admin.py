from django.contrib import admin

from momslap_app.models import About, Contact, Doctors, Facilities, Gallery, Home, Testimonial

# Register your models here.

admin.site.register(Home)
admin.site.register(About)
admin.site.register(Facilities)
admin.site.register(Doctors)
admin.site.register(Contact)
admin.site.register(Gallery)
admin.site.register(Testimonial)
