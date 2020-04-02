# OMath

Demo Available at either:
1. https://OMath.site/
2. https://farhan-mohammed.github.io/OMath/

PS: All the files in `/src` are documented

# Table of contents
1. [Introduction](#introduction)
2. [Background](#background)
    1. [STEM Notes](##STEM%20Notes)
    2. [A New Vision](##A%20New%20Vision)
3. [How it Works](#How%20it%20Works)
3. [Next Steps](#paragraph2)

# Introduction

OMath is a Mouse Drawn Math to LaTeX convertor aimed at professors to be used as a teaching tool in their virtual online lectures. Features include being to edit LaTeX, add your own images and being able to add markdown blobs. The next feature I would add would be able to output a pdf with the information. 


# Background

OMath is a spinoff of Stemnotes which I built in a team with [Arjun Dureja](https://www.linkedin.com/in/arjundureja/), [Uzair Ahmed](https://www.linkedin.com/in/uzairmahmed/) and [Martin Chak](https://www.linkedin.com/in/martinchak/).


## STEM Notes
https://devpost.com/software/stem-notes-c5i7ho

STEM Notes was the original application where this project was born from. STEM Note's vision was aimed at using this tool in a classroom, where a professor writes on his paper, IPad or any writing device and as the professor writes each line it, it updates the LaTeX document on the projector. 

This application involved a lot of compoenents. For our demo at UoftHacks, we had an iPad application, a Google Cloud component, a website and a database. You write your notes on the iPad, it sends a request to the Google Cloud Server, which then updates the database (Firebase), which then renders the specific note on the website.

There were also a lot of features that we had accomplish, such as being able to convert different types of hand written code; programming code, math (LaTeX) and normal text, a voice recorder that attached your voice to the note in sequence and also a drawing / diagram feature.

## A New Vision

Its March 2020, there's a pandemic going on, every school is suddenly shut down and everything is now online. Professor's are teaching on zoom on a 1 week notice without much help from anyone.I noticed professor's who do not own a writing tablet are using a pdf-viewer and annotating on it as a way to teach on their devices. This was not always the best but I made revamped STEM Notes to solve this problem.

There is where OMath was created. 

OMath was designed to be used in a screenshare type of lecture, where the professor can upload pictures of their questions, add notes and then attempt to solve it using the drawing pad. I wanted this process to be seamlessly as possible so I added features such as uploading images, text and being able to edit LaTeX on screen. I removed a lot of features from the original application and made it a sole web application. 

# Hot It Works

This is a relatively simple application. Theres a dashboard with three components:

1. The Drawing pad

The drawing pad uses a library called `react-canvas-draw` which has functions that allow me to manipulate the drawing pad using features available in the library. 

There are a few issues with this component, but I understand that they are related with the library or my misunderstanding of the library. More research with this library or replacing it with another library would fix this issue. 


2. The Text Input

Nothing special here, it adds the text inputted here and supports markdown styling.

3. The Image Upload Box

An `AWS S3 Bucket` is used for storing images uploaded and referred to later on. This makes it easier to communicate the image from component to componenet as it creates a link to access the image instead passing on the actual image (which might be huge; think 1000 2mb images in a document).

Overall, using state and react components made everything modular, thus easier to manipulat and reuse. Have a look over the files in `/src`, I am sure everything should be easy to go over.

The math to LaTeX conversion is done using a MathPix API. 

# Next Steps

I don't work much on this project because this is a side project for me but let's roleplay, you're my boss and you told me to pick this project and have it ready as a product by the end of my internship.

These would be my upgrades

### Math to LaTeX Conversion

Currently Math to LaTeX conversion is done using an API, I could create something using machine learning or natural language processing that will convert computer drawn math to notes. This will be built in-house and will the core of the project.

### Drawing path
Currently I'm using a `react-canvas-draw` canvas to allow the user to draw notes on browser. I've done some research and I found `MyScript` which is similar to the core of my project, and they have their own perfect drawing pad with LaTeX conversion. I could use their API for a drawing pad or I could build my own for scratch if time permits.

### Notes Organization
Right now if you refresh, everything goes away, it would nice to have Notebooks, with different lessons in them that can be shared with students on the platform itself, with colloboration features and what not.