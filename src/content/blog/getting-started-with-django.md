---
title: "Getting Started with Django: A Beginner's Guide"
date: "2023-09-18"
readingTime: "8 min read"
author: "Yoseph Berhane"
tags: ["Python", "Django", "Web Development", "Backend"]
excerpt: "Django is a powerful web framework for Python that encourages rapid development and clean, pragmatic design. Learn how to start building web applications with Django in this beginner's guide."
relatedPosts: ["python-best-practices", "building-ai-powered-web-apps"]
---

Django continues to be one of the most popular web frameworks for Python, and for good reason. It's powerful, scalable, and comes with batteries included. In this guide, I'll walk through setting up your first Django project and explain the key concepts you need to understand.



## Why Choose Django?

As a Python developer, I've worked with several frameworks, but Django stands out for several reasons:

- **Admin Interface**: Django's built-in admin panel is incredibly powerful and customizable
- **ORM System**: Write database queries in Python rather than SQL
- **Security**: Protection against common vulnerabilities like CSRF, XSS, and SQL injection
- **Scalability**: Powers sites like Instagram and Disqus



## Setting Up Your Environment

Before we start with Django, let's create a virtual environment to keep our dependencies isolated:



```python
# Create a virtual environment
python -m venv env

# Activate it (on Windows)
env\Scripts\activate

# Or on macOS/Linux
source env/bin/activate

# Install Django
pip install django
```



## Creating Your First Project

Once Django is installed, you can create your first project:



```python
django-admin startproject mysite
cd mysite
```



This creates a basic project structure:



```
mysite/
    manage.py
    mysite/
        __init__.py
        settings.py
        urls.py
        asgi.py
        wsgi.py
```



Let's understand what each of these files does:

- **manage.py**: A command-line utility that lets you interact with your project
- **settings.py**: Configuration for your Django project
- **urls.py**: URL declarations for your project
- **asgi.py/wsgi.py**: Entry points for ASGI/WSGI compatible web servers



## Creating Your First App

Django projects consist of one or more apps. Let's create one:



```python
python manage.py startapp blog
```



This creates an app structure:



```
blog/
    __init__.py
    admin.py
    apps.py
    migrations/
    models.py
    tests.py
    views.py
```



## Defining Models

Models are Python classes that define your database structure. Let's create a simple blog post model:



```python
# blog/models.py
from django.db import models
from django.utils import timezone

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)
    
    def publish(self):
        self.published_date = timezone.now()
        self.save()
    
    def __str__(self):
        return self.title
```



After defining your model, you need to:

1. Add your app to `INSTALLED_APPS` in `settings.py`
2. Create migrations
3. Apply those migrations



```python
# Make migrations
python manage.py makemigrations blog

# Apply migrations
python manage.py migrate
```



## Creating Views

Views handle HTTP requests and return HTTP responses:



```python
# blog/views.py
from django.shortcuts import render
from .models import Post

def post_list(request):
    posts = Post.objects.filter(published_date__isnull=False).order_by('-published_date')
    return render(request, 'blog/post_list.html', {'posts': posts})
```



## Setting Up URLs

Create a urls.py file in your app and connect it to your project's urls.py:



```python
# blog/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.post_list, name='post_list'),
]
```



```python
# mysite/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('blog.urls')),
]
```



## Creating Templates

Templates define how your data is presented:



```html
<!-- blog/templates/blog/post_list.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Django Blog</title>
</head>
<body>
    <header>
        <h1>My Blog</h1>
    </header>
    
    <main>
        {% for post in posts %}
            <article>
                <h2>{{ post.title }}</h2>
                <time>{{ post.published_date }}</time>
                <p>{{ post.content|linebreaksbr }}</p>
            </article>
        {% endfor %}
    </main>
</body>
</html>
```



## Running Your Server

Now you can run your development server:



```python
python manage.py runserver
```



Visit http://127.0.0.1:8000/ to see your application in action!



## Conclusion

This is just the beginning of what you can do with Django. From here, you can explore more advanced topics like class-based views, authentication, testing, and RESTful APIs with Django REST Framework.

Django's "batteries included" philosophy means you can build complex web applications quickly while maintaining clean, maintainable code. It's been my go-to framework for Python web development for years, and I hope this guide helps you get started on your Django journey!