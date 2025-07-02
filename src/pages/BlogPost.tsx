
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NewsletterForm } from "@/components/NewsletterForm";
import { useEffect } from "react";

// Sample blog post data - In a real app, this would be fetched from Netlify CMS or API
const blogPosts = {
  "getting-started-with-django": {
    title: "Getting Started with Django: A Beginner's Guide",
    date: "September 18, 2023",
    readingTime: "8 min read",
    author: "Yoseph Berhane",
    tags: ["Python", "Django", "Web Development", "Backend"],
    content: `
# Getting Started with Django: A Beginner's Guide

Django continues to be one of the most popular web frameworks for Python, and for good reason. It's powerful, scalable, and comes with batteries included. In this guide, I'll walk through setting up your first Django project and explain the key concepts you need to understand.

## Why Choose Django?

As a Python developer, I've worked with several frameworks, but Django stands out for several reasons:

- **Admin Interface**: Django's built-in admin panel is incredibly powerful and customizable
- **ORM System**: Write database queries in Python rather than SQL
- **Security**: Protection against common vulnerabilities like CSRF, XSS, and SQL injection
- **Scalability**: Powers sites like Instagram and Disqus

## Setting Up Your Environment

Before we start with Django, let's create a virtual environment to keep our dependencies isolated:

\`\`\`python
# Create a virtual environment
python -m venv env

# Activate it (on Windows)
env\\Scripts\\activate

# Or on macOS/Linux
source env/bin/activate

# Install Django
pip install django
\`\`\`

## Creating Your First Project

Once Django is installed, you can create your first project:

\`\`\`python
django-admin startproject mysite
cd mysite
\`\`\`

This creates a basic project structure:

\`\`\`
mysite/
    manage.py
    mysite/
        __init__.py
        settings.py
        urls.py
        asgi.py
        wsgi.py
\`\`\`

Let's understand what each of these files does:

- **manage.py**: A command-line utility that lets you interact with your project
- **settings.py**: Configuration for your Django project
- **urls.py**: URL declarations for your project
- **asgi.py/wsgi.py**: Entry points for ASGI/WSGI compatible web servers

## Creating Your First App

Django projects consist of one or more apps. Let's create one:

\`\`\`python
python manage.py startapp blog
\`\`\`

This creates an app structure:

\`\`\`
blog/
    __init__.py
    admin.py
    apps.py
    migrations/
    models.py
    tests.py
    views.py
\`\`\`

## Defining Models

Models are Python classes that define your database structure. Let's create a simple blog post model:

\`\`\`python
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
\`\`\`

After defining your model, you need to:

1. Add your app to \`INSTALLED_APPS\` in \`settings.py\`
2. Create migrations
3. Apply those migrations

\`\`\`python
# Make migrations
python manage.py makemigrations blog

# Apply migrations
python manage.py migrate
\`\`\`

## Creating Views

Views handle HTTP requests and return HTTP responses:

\`\`\`python
# blog/views.py
from django.shortcuts import render
from .models import Post

def post_list(request):
    posts = Post.objects.filter(published_date__isnull=False).order_by('-published_date')
    return render(request, 'blog/post_list.html', {'posts': posts})
\`\`\`

## Setting Up URLs

Create a urls.py file in your app and connect it to your project's urls.py:

\`\`\`python
# blog/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.post_list, name='post_list'),
]
\`\`\`

\`\`\`python
# mysite/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('blog.urls')),
]
\`\`\`

## Creating Templates

Templates define how your data is presented:

\`\`\`html
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
\`\`\`

## Running Your Server

Now you can run your development server:

\`\`\`python
python manage.py runserver
\`\`\`

Visit http://127.0.0.1:8000/ to see your application in action!

## Conclusion

This is just the beginning of what you can do with Django. From here, you can explore more advanced topics like class-based views, authentication, testing, and RESTful APIs with Django REST Framework.

Django's "batteries included" philosophy means you can build complex web applications quickly while maintaining clean, maintainable code. It's been my go-to framework for Python web development for years, and I hope this guide helps you get started on your Django journey!`,
    relatedPosts: ["python-best-practices", "building-ai-powered-web-apps"]
  },
  "python-best-practices": {
    title: "Python Best Practices for Clean, Maintainable Code",
    date: "November 5, 2023",
    readingTime: "7 min read",
    author: "Yoseph Berhane",
    tags: ["Python", "Best Practices", "Code Quality", "Development"],
    content: `
# Python Best Practices for Clean, Maintainable Code

After years of writing Python code and reviewing others' work, I've compiled what I consider essential best practices for writing clean, maintainable Python code. These guidelines have helped me throughout my career and might help you too.

## Follow the Zen of Python

The Zen of Python, accessible via \`import this\` in any Python interpreter, offers guiding principles for writing good Python code:

\`\`\`python
>>> import this
The Zen of Python, by Tim Peters

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!
\`\`\`

## Use Virtual Environments

Always use virtual environments to isolate dependencies for different projects:

\`\`\`bash
# Create a virtual environment
python -m venv myenv

# Activate it
source myenv/bin/activate  # Unix/macOS
myenv\\Scripts\\activate     # Windows

# Track dependencies
pip freeze > requirements.txt
\`\`\`

## Follow PEP 8

PEP 8 is the style guide for Python code. Some key points:

- Use 4 spaces for indentation (not tabs)
- Limit lines to 79 characters for code, 72 for comments
- Use blank lines to separate functions and classes
- Use spaces around operators and after commas

Tools like \`flake8\` or \`black\` can help enforce these standards:

\`\`\`bash
pip install flake8 black
flake8 your_file.py
black your_file.py
\`\`\`

## Write Docstrings

Document your code with docstrings. I prefer Google style docstrings for their readability:

\`\`\`python
def calculate_mean(numbers):
    """Calculate the arithmetic mean of a list of numbers.
    
    Args:
        numbers (list): A list of integers or floats.
        
    Returns:
        float: The arithmetic mean.
        
    Raises:
        ValueError: If the input list is empty.
    """
    if not numbers:
        raise ValueError("Cannot calculate mean of empty list")
    return sum(numbers) / len(numbers)
\`\`\`

## Use Type Hints

Type hints make your code more readable and allow for static type checking:

\`\`\`python
def greet(name: str, age: int = 30) -> str:
    """Return a greeting message.
    
    Args:
        name: The person's name
        age: The person's age, defaults to 30
        
    Returns:
        A greeting message
    """
    return f"Hello {name}, you are {age} years old!"
\`\`\`

Use \`mypy\` to check your type hints:

\`\`\`bash
pip install mypy
mypy your_file.py
\`\`\`

## Use Context Managers

For resource management, context managers (using \`with\` statements) ensure proper cleanup:

\`\`\`python
# Good - file will be closed automatically
with open('file.txt', 'r') as file:
    content = file.read()

# Not as good - you must remember to close the file
file = open('file.txt', 'r')
content = file.read()
file.close()
\`\`\`

## Beware of Mutable Default Arguments

A classic Python pitfall:

\`\`\`python
# Bad - the list is created once at function definition
def append_to(element, to=[]):
    to.append(element)
    return to

# Good - create a new list each time
def append_to(element, to=None):
    if to is None:
        to = []
    to.append(element)
    return to
\`\`\`

## Use List Comprehensions Judiciously

List comprehensions can make code concise, but overly complex ones hurt readability:

\`\`\`python
# Good - simple and readable
squares = [x*x for x in range(10)]

# Too complex - better to use a loop
matrix = [[i*j for j in range(10)] for i in range(10) if i % 2 == 0]
\`\`\`

## Exception Handling

Be specific about the exceptions you catch:

\`\`\`python
# Bad - catches everything, even KeyboardInterrupt, SystemExit
try:
    do_something()
except:
    handle_error()

# Good - only catches specific exceptions
try:
    do_something()
except (ValueError, TypeError) as e:
    handle_error(e)
\`\`\`

## Testing

Write tests for your code using a framework like \`pytest\`:

\`\`\`python
# test_calculator.py
import pytest
from calculator import add

def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0
    assert add(-1, -1) == -2
\`\`\`

Run tests with:

\`\`\`bash
pytest
\`\`\`

## Package Structure

Organize your code properly:

\`\`\`
my_package/
│
├── __init__.py
├── module1.py
├── module2.py
│
├── tests/
│   ├── __init__.py
│   ├── test_module1.py
│   └── test_module2.py
│
├── README.md
├── setup.py
└── requirements.txt
\`\`\`

## Conclusion

These practices have helped me write better Python code throughout my career. They emphasize readability, maintainability, and robustness - values that are especially important in team environments and long-lived projects.

Remember, the goal isn't to follow rules blindly but to write code that's easy to understand, debug, and extend. As you gain experience, you'll develop your own sense of what works best, but these guidelines provide a solid foundation.`,
    relatedPosts: ["getting-started-with-django", "building-ai-powered-web-apps"]
  },
  "building-ai-powered-web-apps": {
    title: "Building AI-Powered Web Applications with Python",
    date: "January 20, 2024",
    readingTime: "10 min read",
    author: "Yoseph Berhane",
    tags: ["Python", "AI", "Machine Learning", "Web Development"],
    content: `
# Building AI-Powered Web Applications with Python

Artificial Intelligence has moved from research labs to practical applications that we interact with daily. As a developer who has worked extensively with both web technologies and AI, I've found that Python offers the perfect ecosystem for combining these domains. In this post, I'll share my experience building AI-powered web applications.

## The AI Web App Stack

When building AI-powered web applications, I typically use this stack:

- **Backend**: Django or Flask
- **AI/ML**: TensorFlow, PyTorch, or scikit-learn
- **API Layer**: Django REST Framework or Flask-RESTful
- **Frontend**: React or Vue.js (communicating with the Python backend)
- **Deployment**: Docker containers on cloud platforms

## Getting Started: A Simple Example

Let's start with a simple example: a sentiment analysis API using Flask and a pre-trained model. First, set up your environment:

\`\`\`bash
# Create virtual environment
python -m venv env
source env/bin/activate

# Install dependencies
pip install flask transformers torch
\`\`\`

Now, create a simple Flask application:

\`\`\`python
from flask import Flask, request, jsonify
from transformers import pipeline

app = Flask(__name__)

# Load the sentiment analysis model
sentiment_analyzer = pipeline("sentiment-analysis")

@app.route('/analyze', methods=['POST'])
def analyze_sentiment():
    data = request.json
    text = data.get('text', '')
    
    if not text:
        return jsonify({'error': 'No text provided'}), 400
    
    # Analyze the text
    result = sentiment_analyzer(text)
    
    return jsonify({
        'text': text,
        'sentiment': result[0]['label'],
        'score': result[0]['score']
    })

if __name__ == '__main__':
    app.run(debug=True)
\`\`\`

This simple API accepts text via POST requests and returns sentiment analysis results.

## Scaling Up: Django + Machine Learning

For more complex applications, Django provides a robust foundation. Let's create a content recommendation system:

1. Set up a Django project
2. Create models for users and content
3. Train a recommendation model using user interaction data
4. Integrate the model to provide personalized recommendations

Here's a simplified example of the recommendation logic:

\`\`\`python
# recommendations/models.py
from django.db import models
from django.contrib.auth.models import User

class Content(models.Model):
    title = models.CharField(max_length=200)
    text = models.TextField()
    
    # Content features for recommendation
    category = models.CharField(max_length=100)
    tags = models.JSONField()

class UserInteraction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.ForeignKey(Content, on_delete=models.CASCADE)
    liked = models.BooleanField(default=False)
    view_time = models.IntegerField(default=0)  # time spent viewing in seconds
    created_at = models.DateTimeField(auto_now_add=True)
\`\`\`

\`\`\`python
# recommendations/ml_models.py
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from .models import Content, UserInteraction

def get_recommendations(user_id, n=5):
    """Get content recommendations for a specific user."""
    # Get user's interaction history
    interactions = UserInteraction.objects.filter(user_id=user_id)
    
    # If no interactions, return popular content
    if not interactions:
        return Content.objects.order_by('-userinteraction__count')[:n]
    
    # Get content the user liked
    liked_content = Content.objects.filter(
        userinteraction__user_id=user_id, 
        userinteraction__liked=True
    )
    
    # If no liked content, use content with longest view times
    if not liked_content:
        viewed_content_ids = interactions.order_by('-view_time')[:3].values_list(
            'content_id', flat=True
        )
        liked_content = Content.objects.filter(id__in=viewed_content_ids)
    
    # Create a TF-IDF representation of all content
    all_content = Content.objects.all()
    content_texts = [
        f"{c.title} {c.category} {' '.join(c.tags)}" 
        for c in all_content
    ]
    
    vectorizer = TfidfVectorizer(stop_words='english')
    content_vectors = vectorizer.fit_transform(content_texts)
    
    # Create vectors for liked content
    liked_indices = [
        list(all_content).index(content) 
        for content in liked_content
    ]
    liked_vectors = content_vectors[liked_indices]
    
    # Calculate similarity between liked content and all content
    if len(liked_indices) > 0:
        user_profile = liked_vectors.mean(axis=0)
        similarities = cosine_similarity(user_profile, content_vectors)[0]
        
        # Get indices of most similar content
        similar_indices = similarities.argsort()[::-1]
        
        # Filter out already interacted content
        interacted_ids = set(interactions.values_list('content_id', flat=True))
        recommendations = []
        
        for idx in similar_indices:
            content_id = all_content[idx].id
            if content_id not in interacted_ids:
                recommendations.append(content_id)
                if len(recommendations) >= n:
                    break
        
        return Content.objects.filter(id__in=recommendations)
    
    # Fallback to popular content
    return Content.objects.order_by('-userinteraction__count')[:n]
\`\`\`

\`\`\`python
# recommendations/views.py
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .ml_models import get_recommendations
from .serializers import ContentSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_recommendations(request):
    recommendations = get_recommendations(request.user.id)
    serializer = ContentSerializer(recommendations, many=True)
    return JsonResponse(serializer.data, safe=False)
\`\`\`

## Handling Real-Time AI Processing

For real-time AI processing, like analyzing user uploads or processing streaming data, Celery with Redis/RabbitMQ provides an excellent solution:

\`\`\`python
# tasks.py
from celery import shared_task
import torch
from PIL import Image
from .models import UserUpload

@shared_task
def process_image(upload_id):
    """Process an uploaded image with an AI model."""
    upload = UserUpload.objects.get(id=upload_id)
    
    # Load the image
    image = Image.open(upload.image.path)
    
    # Process with your AI model
    model = torch.hub.load('ultralytics/yolov5', 'yolov5s')
    results = model(image)
    
    # Save the results
    upload.processed = True
    upload.results = results.pandas().xyxy[0].to_json()
    upload.save()
    
    return upload.id
\`\`\`

\`\`\`python
# views.py
from django.http import JsonResponse
from rest_framework.parsers import MultiPartParser
from rest_framework.decorators import api_view, parser_classes
from .models import UserUpload
from .tasks import process_image

@api_view(['POST'])
@parser_classes([MultiPartParser])
def upload_image(request):
    # Save the uploaded image
    upload = UserUpload.objects.create(
        user=request.user,
        image=request.FILES['image']
    )
    
    # Process asynchronously
    process_image.delay(upload.id)
    
    return JsonResponse({
        'upload_id': upload.id,
        'status': 'processing'
    })
\`\`\`

## Deploying AI-Powered Applications

Deploying AI models with web applications introduces unique challenges:

### 1. Containerization

Use Docker to package your application with all its dependencies:

\`\`\`dockerfile
FROM python:3.9

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \\
    libpq-dev \\
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Run the application
CMD ["gunicorn", "myproject.wsgi:application", "--bind", "0.0.0.0:8000"]
\`\`\`

### 2. Model Serving Strategies

For efficient model serving, consider these approaches:

- **Precompute Results**: For non-real-time needs, process data in batches
- **Model Quantization**: Reduce model size and increase inference speed
- **Separate Model Server**: Use TensorFlow Serving or TorchServe
- **GPU Acceleration**: Use cloud instances with GPUs for faster inference

### 3. Monitoring AI Components

Monitor your AI components with tools like Prometheus and Grafana:

\`\`\`python
# middleware.py
import time
from prometheus_client import Histogram

# Create metrics
MODEL_PREDICTION_TIME = Histogram(
    'model_prediction_seconds', 
    'Time spent performing model prediction',
    ['model_name']
)

class MLMetricsMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        return response

    def process_view(self, request, view_func, view_args, view_kwargs):
        if hasattr(view_func, 'model_prediction'):
            start_time = time.time()
            response = view_func(request, *view_args, **view_kwargs)
            prediction_time = time.time() - start_time
            
            MODEL_PREDICTION_TIME.labels(
                view_func.model_name
            ).observe(prediction_time)
            
            return response
        return None
\`\`\`

## Ethical Considerations

When building AI-powered applications, consider:

1. **Bias and Fairness**: Ensure your training data and models are representative and fair
2. **Privacy**: Handle user data responsibly, especially when used for training
3. **Transparency**: Be clear with users about how AI is being used
4. **Explainability**: Consider using explainable AI techniques when appropriate

## Conclusion

Building AI-powered web applications with Python offers an exciting intersection of technologies. By leveraging frameworks like Django and Flask alongside AI libraries like TensorFlow and PyTorch, you can create intelligent web applications that provide real value to users.

The approach I've outlined - using a robust web framework, integrating AI models, processing intensive tasks asynchronously, and deploying with containerization - has served me well in numerous projects.

As AI continues to advance, the opportunities for creating intelligent web applications will only grow. The Python ecosystem, with its strength in both web development and AI/ML, remains the ideal choice for developers looking to build in this space.`,
    relatedPosts: ["getting-started-with-django", "python-best-practices"]
  },
  "modern-react-hooks": {
    title: "Understanding Modern React Hooks",
    date: "May 12, 2023",
    readingTime: "8 min read",
    author: "Yoseph Berhane",
    tags: ["React", "JavaScript", "Hooks"],
    content: `
# Understanding Modern React Hooks

React Hooks have revolutionized how we write React components, moving away from class components and toward a more functional approach. In this article, we'll explore some of the more advanced hooks and patterns.

## useState vs useReducer

While **useState** is perfect for simple state values, **useReducer** shines when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.

\`\`\`jsx
// Using useState
const [count, setCount] = useState(0);

// Equivalent using useReducer
const [count, dispatch] = useReducer((state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}, 0);
\`\`\`

## useCallback for Performance

The **useCallback** hook returns a memoized version of the callback that only changes if one of the dependencies has changed.

\`\`\`jsx
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
\`\`\`

## useMemo for Expensive Calculations

**useMemo** is similar to useCallback but is designed to memoize computed values rather than functions.

\`\`\`jsx
const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
\`\`\`

## Custom Hooks for Reusability

One of the most powerful features of hooks is the ability to create your own for reusable logic.

\`\`\`jsx
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return size;
}

// Usage
function MyComponent() {
  const size = useWindowSize();
  return (
    <div>
      Width: {size.width}, Height: {size.height}
    </div>
  );
}
\`\`\`

## Conclusion

Hooks provide a more direct API to React concepts you were already familiar with: props, state, context, refs, and lifecycle. They also offer a powerful new way to combine them.`,
    relatedPosts: ["typescript-tips", "state-management"]
  },
  "typescript-tips": {
    title: "10 TypeScript Tips for Better Code",
    date: "April 23, 2023",
    readingTime: "6 min read",
    author: "Yoseph",
    tags: ["TypeScript", "Best Practices"],
    content: `
# 10 TypeScript Tips for Better Code

TypeScript continues to grow in popularity, and for good reason. Here are some tips to help you write better TypeScript code.

## 1. Use Type Inference Where Possible

TypeScript's type inference is powerful. Don't add type annotations when they're unnecessary.

\`\`\`typescript
// Unnecessarily verbose
const name: string = "TypeScript";

// Let TypeScript infer the type
const name = "TypeScript";
\`\`\`

## 2. Understand the 'any' Type

The \`any\` type effectively opts out of type checking. Use it sparingly and consider \`unknown\` as a safer alternative.

## 3. Leverage Union Types

Union types are powerful for representing values that could be one of several types.

\`\`\`typescript
type StringOrNumber = string | number;

function process(input: StringOrNumber) {
  if (typeof input === "string") {
    return input.toUpperCase();
  }
  return input * 2;
}
\`\`\`

## 4. Use Intersection Types for Object Combinations

Intersection types combine multiple types into one.

\`\`\`typescript
type Person = {
  name: string;
};

type Employee = {
  id: number;
  department: string;
};

type EmployeeRecord = Person & Employee;
\`\`\`

## 5. Implement Discriminated Unions

These are useful for modeling state transitions or API responses.

\`\`\`typescript
type LoadingState = {
  status: "loading";
};

type SuccessState = {
  status: "success";
  data: any;
};

type ErrorState = {
  status: "error";
  error: Error;
};

type State = LoadingState | SuccessState | ErrorState;
\`\`\`

## 6. Make Good Use of 'readonly'

The \`readonly\` modifier prevents properties from being changed after initialization.

\`\`\`typescript
interface Config {
  readonly apiUrl: string;
}
\`\`\`

## 7. Use Type Guards

Type guards help narrow down the type of a value.

\`\`\`typescript
function isString(value: unknown): value is string {
  return typeof value === "string";
}
\`\`\`

## 8. Leverage Generics for Reusable Code

Generics allow you to create reusable components.

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}
\`\`\`

## 9. Use Mapped Types for Transformations

Mapped types allow you to create new types from existing ones.

\`\`\`typescript
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};
\`\`\`

## 10. Optimize for Strictness

Enable strict mode in your tsconfig.json to catch more errors.

\`\`\`json
{
  "compilerOptions": {
    "strict": true
  }
}
\`\`\`
`,
    relatedPosts: ["modern-react-hooks", "nextjs-vs-remix"]
  },
  // Add more blog posts in a similar format
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  useEffect(() => {
    if (!post) {
      window.location.href = "/blog";
    }
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [post, slug]);

  if (!post) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <article className="container py-8 md:py-12">
          <div className="mx-auto max-w-[800px]">
            {/* Post Header */}
            <div className="mb-8">
              <Link to="/blog" className="flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                Back to Blog
              </Link>
              
              <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-4 flex items-center text-sm text-muted-foreground">
                <span>By {post.author}</span>
                <span className="mx-2">•</span>
                <time dateTime={post.date}>{post.date}</time>
                <span className="mx-2">•</span>
                <span>{post.readingTime}</span>
              </div>
            </div>
            
            {/* Post Content */}
            <div 
              className="prose dark:prose-invert prose-headings:font-bold prose-a:text-primary max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Post Footer */}
            <div className="mt-12 border-t pt-6">
              <h2 className="text-2xl font-bold">Related Posts</h2>
              <div className="mt-4 grid gap-6 sm:grid-cols-2">
                {post.relatedPosts && post.relatedPosts.map((relatedSlug) => {
                  const relatedPost = blogPosts[relatedSlug as keyof typeof blogPosts];
                  if (relatedPost) {
                    return (
                      <div key={relatedSlug} className="rounded-lg border p-4">
                        <h3 className="font-bold">{relatedPost.title}</h3>
                        <div className="mt-2 text-sm text-muted-foreground">
                          {relatedPost.date} • {relatedPost.readingTime}
                        </div>
                        <Button asChild variant="link" className="mt-2 p-0">
                          <Link to={`/blog/${relatedSlug}`}>Read Post</Link>
                        </Button>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        </article>
        
        {/* Newsletter Section */}
        <section className="bg-muted/40 py-16">
          <div className="container">
            <div className="mx-auto max-w-[500px]">
              <NewsletterForm />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
