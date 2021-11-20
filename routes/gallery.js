import express from "express"
import isLoggedIn  from "../middleware/middleware.cjs";
import multer from "multer"
import { storage } from "../cloudinary/index.cjs"
import { Image } from "../models/images.js"
import {User} from "../models/user.js"
import { bgimgs } from "../models/bgimgCollection.js"
const upload = multer({ storage });

var router = express.Router();

router.get('/home', (req, res) => {
    res.render("home.ejs")
})

router.get('/profile', isLoggedIn, async(req, res) => {
    const username = req.user
    const id = username._id
    const images = await Image.find({'author':id});
    res.render("profile.ejs", {username, images})
})

router.post('/profile', isLoggedIn, (req, res) => {
    res.send("edit your profile?")
})

router.get('/gallery', async (req, res) => {
    const images = await Image.find({});
    res.render("gallery.ejs", {images})
})

router.get('/gallery/:id', async (req, res) => {
    const images = await Image.findById(req.params.id)
    const user = await User.find({ 'author': images.author });
    console.log(images)
    res.render("gallery_show.ejs", {images, user})
})

router.get('/sketch', isLoggedIn, (req, res) => {
    const username = req.user
    res.render("sketch.ejs", {bgimgs, username})
})

router.post('/sketch', isLoggedIn, async (req, res) => {
    console.log(req.body)
    const image = new Image(req.body);
    image.author = req.user._id;
    image.img = req.body.img

    await image.save();
    res.redirect('/home')
})

const gallery = router;
export {gallery}