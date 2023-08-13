// Doc : https://www.npmjs.com/package/json-server
// Doc 2: https://github.com/passageidentity/example-node/blob/main/02-Login-With-Profile/index.js

import Passage from "@passageidentity/passage-node";
import hbs from "hbs";
import dotenv from "dotenv";
import express from "express";
import JsonServer from 'json-server';
// import requestIP from 'request-ip';
import authMiddleware from './middleware/auth.mjs';
import fileDirName from './file-dir-name.mjs';

dotenv.config();

const DBPATH= '\\db\\records.json';
const { __dirname } = fileDirName(import.meta);
const DB = __dirname + DBPATH;
const public_dir = `${__dirname}\\public`;
const PORT = process.env.PORT;
const SERVER_NAME = process.env.SERVER_NAME;
const SERVER_URL = process.env.SERVER_URL; 
const passageConfig = { appID: process.env.PASSAGE_APP_ID, apiKey: process.env.PASSAGE_API_KEY};

// JSON Server Router
const router = JsonServer.router(DB);
const app = JsonServer.create();
// JSON Server Default middleware
const middlewares = JsonServer.bodyParser;
// Push any custom middleware
middlewares.push(authMiddleware);
// 
app.set('port', PORT);

// app.use('/public', express.static('public'));

app.use('views', express.static('public'));

app.get("/", (req, res) => {
  res.render(`${public_dir}\\index.hbs`, { appID: process.env.PASSAGE_APP_ID });
});


// example of custom middleware
let passage = new Passage(passageConfig);
let passageAuthMiddleware = (() => {
  return async (req, res, next) => {
    try {
      let userID = await passage.authenticateRequest(req);
      if (userID) {
        // user is authenticated
        res.userID = userID;
        next();
      }
    } catch (e) {
      console.log(e);
      res.render("unauthorized.hbs");
    }
  };
})();



// authenticated route that uses middleware
app.get("/dashboard", passageAuthMiddleware, async (req, res) => {
  let userID = res.userID;
  let user = await passage.user.get(userID);

  let userIdentifier;
  if (user.email) {
    userIdentifier = user.email;
  } else if (user.phone) {
    userIdentifier = user.phone;
  }
  res.render(`${public_dir}\\dashboard.hbs`, { appID: process.env.PASSAGE_APP_ID });
});

// Add custom routes before JSON Server router
// app.post('/users', async (req, res) => {
//   if (!validateEmail(req.email) ) {
//     return res.status(500).jsonp({error: "Not a valid email value"});
//   }
//   const user = DBJSON.users.find(u=>u.email.toLowerCase() == req.email.toLowerCase());
//   if(!user){
//     DBJSON.users.push(req.query);
//     const response = await fs.writeFileSync(DBJSON, JSON.stringify(DBJSON));
//     res.jsonp(req.query);
//   }
//   res.jsonp(user);
// })


app.use(JsonServer.defaults());
app.use(middlewares);
app.get('/myip', (req, res) => {
  const ipAddress =  req.header('x-forwarded-for') ||
  req.socket.remoteAddress;
  
  console.log(ipAddress)
  res.jsonp(ipAddress);
})
app.use(router);

app.set("view engine", "hbs");
app.set("view engine", "html");
app.engine("html", hbs.__express);



app.listen(PORT, () => {
  console.info(`${SERVER_NAME} App listening on port ${SERVER_URL}`);
});


 
function validateEmail(email){
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};