const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./database/dbConnection');
const cors = require('cors');
const port = process.env.PORT || 8080;
const app = express();
require('dotenv').config()
const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'https://week5projectlake.herokuapp.com',
  clientID: 'PGWD6A1aIIaxUOQcRbN5mpJ70M3P8eZw',
  issuerBaseURL: 'https://dev-0isyug26.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(auth(config));

// req.isAuthenticated is provided from the auth router
// app.get('/', (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });
app.get('/', (req, res) => {
  res.send("hello");
});

app
  .use(cors())
  .use(bodyParser.json())
  .use('/', require("./routes"))

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
