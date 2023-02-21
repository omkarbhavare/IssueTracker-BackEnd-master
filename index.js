const express = require('express');
const cookieParser = require('cookie-parser');
var expressLayouts = require('express-ejs-layouts');
const port = 8000;


const db = require('./config/mongoose');
const session = require('express-session');
// const MongoStore = require('connect-mongo');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
// const MongoDBStore = require('connect-mongodb-session')(session);
const MongoStore = require('connect-mongo');




const passportGoogle = require('./config/passport-google-oauth2-strategy')

const app = express();
app.use(express.static('assets'));



app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(expressLayouts);
// extract style and script from subpages to layout


// setup view engin
app.set('view engine', 'ejs');
app.set('views', './views');


app.use(session({
    name: 'quoro',
    secret: 'hellochetan',
    saveUninitialized: false,
    resave: false,

    cookie: {
        maxAge: (1000 * 60 * 100)

    },


    store: MongoStore.create({

        mongoUrl: 'mongodb+srv://omkarbhavare2406:Issue24@cluster0.2s4zb4v.mongodb.net/?retryWrites=true&w=majority',
        autoRemove: 'disabled'

    },
        function (err) {
            console.log(err);
        })


}))


app.use(passport.initialize());
app.use(passport.session());
// app.use(expressLayouts);

app.use(passport.setAuthenticatedUser)

// extract style and script from subpages to layout
// app.set('layout extractStyles', true);
// app.set('layout extractScripts', true);
app.use('/', require('./routes'));

app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port} `);
})