<a href="https://pacific-bastion-50258.herokuapp.com/"><img src="/public/images/logo-for-github.png"></a>

<p>This project is a web app made to release your inner child. 
Use your creative side to doodle with Poodle Doodle <a href="https://pacific-bastion-50258.herokuapp.com/">here</a></p>

## 💻 What it does
<p>Poodle Doodle is a web app that allows you to doodle and to checkout other people's doodles. Whether you want to draw with a pen, or use shapes, Poodle Doodle can make your visions come to life.</p>

<img width="50%" src="/public/images/Poodle_Doodle_-_Google_Chrome_2021-11-21_20-21-49_SparkVideo (1).gif" alt="app-preview"/>

<a href="https://www.youtube.com/watch?v=EAaKhfzaxYA&ab_channel=MTisby">view the full video here</a>

<ul>
    <li>Create an account</li>
    <li>Go to the Sketch tab</li>
    <li>Select a photo or color for your background</li>
    <li>Select a pen or shape tool </li>
    <li>Select a color </li>
    <li>Get started! </li>
</ul>

## 🔨 Installation
Clone the repository and run the following in your terminal:
```bash
> npm i
```
This installs all neccessary packages. Mext, run the following:
```bash
> node app.js
```
In a separate terminal run the following: 
```bash
> mongod
```
This activates MongoDB on your local device; however, note that cloning this repo to your local device means that the database will be empty. To see the full effect of the web app, create an account to put your first bit of data into your local database.

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

## ✨ Contact Me
<h3>The Engineer:</h3>
Mariel Tisby
<a href="https://www.linkedin.com/in/mtisby/">
    <p> LinkedIn </p>
</a>
<a href="https://mtisby.github.io/mtisby-website/">
    <p> Website </p>
</a>


