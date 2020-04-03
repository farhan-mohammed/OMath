# OMath

<img src="https://imgur.com/Vcvitoc.png">

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
3. [Next Steps](#Next%20Steps)
 
# Introduction
 
OMath is a Mouse Drawn Math to LaTeX converter meant for professors to be used as a teaching tool in their virtual online lectures. Features include being able to edit LaTeX, adding custom user images and being able to add markdown blobs. The next feature I would add would be the ability to output a pdf with the information. 
 
 
# Background
 
OMath is a spinoff of Stemnotes which I built in a team with [Arjun Dureja](https://www.linkedin.com/in/arjundureja/), [Uzair Ahmed](https://www.linkedin.com/in/uzairmahmed/) and [Martin Chak](https://www.linkedin.com/in/martinchak/).
 
 
## STEM Notes
https://devpost.com/software/stem-notes-c5i7ho
 
STEM Notes was the original application where this project was born from. STEM Note's vision was aimed at using this tool in a classroom, where a professor writes on paper, an iPad, or any other writing device. As the professor writes each line, it updates the LaTeX document on the projector. 
 
This application involved several components. For our demo at UofTHacks, we utilised an iPad application, a Google Cloud component, a website, and a database. Users write their notes on the iPad, which sends a request to the Google Cloud Server, updating the database (Firebase)and rendering the specific note on the website.
 
There were many features that we had accomplished, such as being able to convert different types of handwritten code; programming code, math (LaTeX) and normal text, a voice recorder that attached your voice to the note in sequence, and also a drawing/diagram feature.
 
## A New Vision
 
It's March 2020, there's a pandemic going on, every school is suddenly shut down, and everything is now online. Professors are teaching on Zoom and other video calling applications on a 1-week notice without much help from anyone. I noticed professors who do not own a writing tablet are using a pdf-viewer and annotating on it as a way to teach on their devices. This is not the optimal solution, so I revamped STEM Notes to solve this problem.
 
There is where OMath was created. 
 
OMath was designed to be used in a screen share type of lecture, where the professor can upload pictures of their questions, add notes and then attempt to solve it using a drawing pad. I wanted this process to be as seamless as possible, so I added features such as uploading images and text, and being able to edit LaTeX on screen. I removed several features from the original application and made it a sole web application. 
 
# How It Works
 
This is a relatively simple application. There is a dashboard with three components:
 
1. The Drawing Pad
 
The drawing pad uses a library called `react-canvas-draw` which has functions that allow me to manipulate the drawing pad using features available in the library. 
 
There are a few issues with this component, but I understand that they are related to the library or my misunderstanding of the library. More research with this library or replacing it with another library would fix this issue. 
 
 
2. The Text Input
 
Nothing special here, it adds the text inputted here and supports markdown styling.
 
3. The Image Upload Box
 
An `AWS S3 Bucket` is used for storing images uploaded and referred to later on. This makes it easier to communicate the image from component to component as it creates a link to access the image instead of passing on the actual image (which might be huge; think 1000 2 mb images in a document).
 
Overall, using state and react components made everything modular, thus easier to manipulate and reuse. Have a look over the files in `/src`, I am sure everything should be easy to go over.
 
The math to LaTeX conversion is done using a MathPix API. 
 
# Next Steps
 
I don't work much on this project because this is a side project for me, but let's pretend you're my boss and you’ve asked me to pick this project and have it ready as a product by the end of my internship.
 
These would be my upgrades:
 
### Math to LaTeX Conversion
 
Currently, Math to LaTeX conversion is done using an API, I could create something using machine learning or natural language processing that would convert computer-drawn math to notes. This would be built in-house and would be the core of the project.
 
### Drawing Path

Currently, I'm using a `react-canvas-draw` canvas to allow the user to draw notes on the browser. I've done some research and I've found a library called MyScript, which is similar to the core of my project but with perfected drawing pad with LaTeX conversion capabilities. I could use their API for a drawing pad or I could build my own for a scratch if time permits.
 
### Notes Organization

Right now if you refresh, everything goes away, and it would be nice to have notebooks, with different lessons in them that can be shared with students on the platform itself, with collaboration features and whatnot.

