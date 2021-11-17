import express from "express"
import isLoggedIn  from "../middleware/middleware.cjs";
import { asyncWrap } from "../utilis/asyncWrap.js";
import multer from "multer"
import { storage } from "../cloudinary/index.cjs"
import cloudinary from "../cloudinary/index.cjs"
const upload = multer({ storage });


var router = express.Router();

router.get('/home', (req, res) => {
    res.render("home.ejs")
})

router.get('/profile', (req, res) => {
    res.render("profile.ejs")
})

router.post('/profile', (req, res) => {
    res.send("edit your profile?")
})

router.get('/gallery', (req, res) => {
    res.render("gallery.ejs")
})

router.get('/gallery/:id', (req, res) => {
    res.send("gallery id")
})

router.get('/sketch', (req, res) => {
    res.render("sketch.ejs")
})

const gallery = router;
export {gallery}