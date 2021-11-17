import dotenv from "dotenv"

if (process.env.NODE_ENV !== "productions") {
    dotenv.config()
}

import express from "express"
import mongoose from "mongoose"
import methodOverride from "method-override"
import session from "express-session"
import flash from "connect-flash"
import ejsMate from 'ejs-mate';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import passport from 'passport'
import LocalStrategy from 'passport-local'
import MongoStore from "connect-mongo"


// errors, sanitize, etc.
import { ExpressError } from "./utilis/ExpressError.js"

// models
import { User } from './models/user.js'

// routes
import { gallery } from "./routes/gallery.js"

// const dbUrl = 'mongodb://localhost:27017/paint-app';

// mongoose.connect(dbUrl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//     console.log("Database connected");
// });

const app = express();
const port = 3060;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static(__dirname + '/public'));
// app.use(mongoSanitize({
//     replaceWith: "_"
// }))

const secret = process.env.SECRET;

// const store = MongoStore.create({
//     mongoUrl: dbUrl,
//     touchAfter: 24 * 60 * 60,
//     crypto: {
//         secret
//     }
// });

const sessionConfig = {
    // store,
    secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfig))
app.use(flash());

app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

//************//
//** routes **//
//************//
app.use('/paint', gallery)

app.get('/', (req, res) => {
    res.render('./splash.ejs')
})

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})

app.use((err, req, res, next) => {
    const { statusCode = 500, message = "something went wrong" } = err;
    res.status(statusCode).render('./errors/error.ejs', {err})
})

app.listen(port, () => {
    console.log(`listening on : ${port}`)
})