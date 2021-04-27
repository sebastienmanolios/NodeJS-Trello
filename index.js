//  Loads environment variables from a .env file into process.env
require('dotenv').config();

const express = require('express');

// -----------------------------------------------------------------------------------------------------
// Cross-origin resource sharing (CORS) allows AJAX requests to skip the Same-origin policy and access 
// resources from remote hosts. We have to allow our API to others domains than ours.
// Everybody is allowed to take some datas from our APIs
const cors = require('cors');
// ----------------------------------------------------------------------------------------------------
// Sanitization protect my application against inappropriate input.
const sanitizer = require('./app/middlewares/body-sanitizer');
// ----------------------------------------------------------------------------------------------------
// Body parser multer
const multer  = require('multer');
// ----------------------------------------------------------------------------------------------------


const app = express();
const router = require('./app/router');
const port = process.env.PORT || 3000;

// -----------------------------------------------------------------------------------------------------
// If we do a bundle from our front application here, it is possible to not use this module
// app.use(cors('*'));
// To authorize access to our API, we will do like this from an external domain
// app.use(cors('https://www.domaine.com'));
// -----------------------------------------------------------------------------------------------------


// -----------------------------------------------------------------------------------------------------
// handling multipart/form-data instead of using --> Organize datas into request.body
// app.use(express.urlencoded({extended: true}));
const bodyParser = multer();
// .none() is used to specify we don't wait for files only classics inputs
app.use( bodyParser.none() );
// -----------------------------------------------------------------------------------------------------

// Sanitize data from request.body
app.use(sanitizer);

// If we want to incorporate the front part of the application, we just have put front files into
// assets's directory
// app.use(express.static('assets'));

app.use(router);

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});