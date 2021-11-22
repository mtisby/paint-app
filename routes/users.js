import express from "express"
import passport from "passport"
import { asyncWrap } from "../utilis/asyncWrap.js";
import { User } from "../models/user.js";

const router = express.Router()

router.get('/register', (req, res) => {
    res.render("register.ejs")
})

router.post('/register', asyncWrap(async (req, res) => {
    try {
        const { email, profilePicture, username, password } = req.body;
        const user = new User({ email, profilePicture, username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, error => {
            if (error) {
                return next(error)
            } else {
                req.flash('success', 'Welcome to Paint')
                res.redirect('/profile') 
            }
        })
    } catch (e) {
        console.log(e)
        req.flash('error', e.message);
        res.redirect('/register')
    }
    
}))


router.get('/login', (req, res) => { 
    res.render("login.ejs")
})

router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login'}), (req, res) => {
    // req.flash('success', "Welcome Back!");
    console.log("Welcome Back!")
    // const redirectUrl = req.session.returnTo || '/cheflavor/staffportal/home';
    // delete req.session.returnTo;
    // res.redirect(redirectUrl)
    try {
        res.redirect('/profile')
    } catch (e) {
        console.log(e)
    }
})

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})

const userRoutes = router
export { userRoutes }