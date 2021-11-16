import express from "express"
import isLoggedIn  from "../middleware/middleware.cjs";
import { asyncWrap } from "../utilis/asyncWrap.js";
import multer from "multer"
import { storage } from "../cloudinary/index.cjs"
import cloudinary from "../cloudinary/index.cjs"
const upload = multer({ storage });


var router = express.Router();

router.get('/', (req, res) => {
    res.render("home.ejs")
})

router.get('/profile', (req, res) => {
    res.render("profile.ejs")
})

router.post('/profile', (req, res) => {
    res.send("edit your profile?")
})

router.get('/gallery', (req, res) => {
    res.send("gallery")
})

router.get('/gallery/:id', (req, res) => {
    res.send("gallery id")
})

router.get('/sketch', (req, res) => {
    res.render("sketch.ejs")
})

router.post('/sketch', (req, res) => {
    res.send("save")
})

const gallery = router;
export {gallery}