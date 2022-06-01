
from django.contrib import admin

from momslap_app.models import Banner, Contact, Doctors, Gallery, Testimonial, Package

# Register your models here.

admin.site.register(Banner)
admin.site.register(Doctors)
admin.site.register(Contact)
admin.site.register(Gallery)
admin.site.register(Testimonial)
admin.site.register(Package)
