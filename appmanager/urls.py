from django.contrib import admin
from django.urls import path, include, re_path


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('hr.urls')),
    path('api/v1/', include('accounts.urls')),
    re_path(r'^.*', include('template.urls')),
]
