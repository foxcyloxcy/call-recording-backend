//import environment variables
//line 3 must always be the first code to be run
import {} from "dotenv/config";

// import express
import express from "express";
// import cors
import cors from "cors";
// import routes
import router from "./routes/routes.js";

//add https support
// import http from "http";
import http from "http";
import fs from "fs";

// init express
const app = express();

// use express json
//app.use(express.json());
app.use(express.json({limit: '50mb'}));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', `http://localhost:5173`);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// use cors
app.use(cors());

// use router
//
app.use(router);

let host = process.env.HOST;
let port = process.env.PORT;
// global.valid_token = process.env.VALID_TOKEN;
// global.node_baseurl = process.env.NODE_BASEURL
http
  .createServer(
    {
      key: fs.readFileSync("keys/privkey.pem"),
      cert: fs.readFileSync("keys/fullchain.pem"),
     // key: fs.readFileSync("/opt/bitnami/apache/conf/mnetdemo.gcm3.com.key"),
     // cert: fs.readFileSync("/opt/bitnami/apache/conf/mnetdemo.gcm3.com.crt"),
    },
    app
  )
.listen(port, () => console.log(`Server running at https://${host}:${port}`));
