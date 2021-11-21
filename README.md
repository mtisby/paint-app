<a href="https://pacific-bastion-50258.herokuapp.com/"><h1> Poodle Doodle</h1></a>

<p>This project is a web app to release your inner child. 
Use your creative side to doodle with Poodle Doodle <a href="https://pacific-bastion-50258.herokuapp.com/">here</a></p>

## 💻 What it does
<p>Poodle Doodle is a web app that allows you to doodle and to checkout other people's doodles. Whether you want to draw with a pen, or use shapes, Poodle Doodle can make your visions come to life.</p>

<img width="50%" src="#" alt="app-preview"/>

<ul>
    <li>Create an account</li>
    <li>Go to the Sketchpad tab</li>
    <li>Select a photo or color for your background</li>
    <li>Select a pen or shape tool </li>
    <li>Select a color </li>
    <li>Get started! </li>
</ul>

## 🔨 Installation
clone the repository and run the following in your terminal:
```bash
> npm i
```
this starts the server

in a separate terminal run the following: 
```bash
> mongod
```
this activates MongoDB on your local device

## 🔨 How we built it
<h2>Tools Used</h2>

<h5>Languages Used</h5>
<ul>
    <li>JavaScript</li>
    <li>EJS</li>
    <li>CSS</li>
</ul>

<h5>Frameworks</h5>
<ul>
    <li>Express</li>
</ul>

<h5>Cloud Storage & Databases</h5>
<ul>
    <li>MongoDB</li>
    <li>Cloudinary</li>
</ul>

<h5>Libraries Used</h5>
<ul>
    <li>ejs</li>
    <li>express</li>
    <li>express session</li>
    <li>joi</li>
    <li>method override</li>
    <li>mongo</li>
    <li>mongoose</li>
    <li>passport</li>
</ul>

## 🧠 Challenges we ran into
<p> One of the challenges I had to overcome was managing image storage. Because the prompt was to create a digital art app and I wanted to create a full stack application, image storage was a huge issue. I was originally going to use Cloudinary to upload images but I realized users could essentially upload as many images as they wanted and I would quickly run out of free storage. So instead I converted image urls to dataurls and stored the dataurls in our Mongo database. That way we minimize image storage but images are still accessible across browsers. </p> 

## 🏅 Accomplishments that we're proud of
<ul>
    <li>I created my first art-based app</li>
    <li>I got more familar with event-listeners</li>
    <li>This is the fastest I have ever deployed a full stack application</li>
</ul>

## 🔜 What's next for Poodle Doodle
<p>Up next we will be adding more social features such as messaging, sharing, and following fellow Doodlers!</p>

## ✨ Contact Us
<h3>The Engineer:</h3>
Mariel Tisby
<a href="https://www.linkedin.com/in/mtisby/">
    <img style="vertical-align:top; margin:4px" src="./public/images/LinkedIn.png" width="2.5%"/>
    <p> LinkedIn </p>
</a>
<a href="https://mtisby.github.io/mtisby-website/">
    <img style="vertical-align:top; margin:4px" src="./public/images/Website.png" width="2.5%"/>
    <p> Website </p>
</a>

<h3>The Designer:</h3>
Jane Huntington
<a href="https://www.linkedin.com/in/jane-huntington/">
    <img style="vertical-align:top; margin:4px" src="./public/images/LinkedIn.png" width="2.5%"/>
    <p> LinkedIn </p>
</a>
<a href="https://www.janehuntington.com/">
    <img style="vertical-align:top; margin:4px" src="./public/images/Website.png" width="2.5%"/>
    <p> Website </p>
</a>

