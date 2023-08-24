const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
require("dotenv").config();
const cors = require("cors");
const port = process.env.port || 8080;
const vehicleRoutes = require("./routes/vehicles");
const authRoutes = require("./routes/auth");
const client = require("../db/client");
const auth = require("./middleware/authentication");

const whitelist = [
  "http://localhost:3000",
  "https://localhost:3000",
  "http://localhost:3001",
  "https://localhost:3001",
  "http://vehiclegatekioskui2-env.eba-vgfrxrgp.us-gov-west-1.elasticbeanstalk.com",
  "http://vehiclegatekioskserver576-env.eba-rejckfyi.us-gov-west-1.elasticbeanstalk.com",
];

// ----------------- CORS ----------------------------------------------------//

const corsOptions = {
  credentials: true,
  Credential: "include",
  AllowedHeaders: "Content-Type, Authorization",
  Allowedheaders: "Content-Type, Base",

  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else if (origin === undefined) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

//-------- DataBase Connection initialization ---------------------------------//
let retries = 5;
while (retries) {
  try {
    client.connect();
    console.log("Connected to database");
    break;
  } catch (err) {
    console.log(err);
    retries -= 1;
    console.log(`retries left: ${retries}`);
    // wait 5 seconds
    new Promise((res) => setTimeout(res, 5000));
  }
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// -------- inital API route -----------------------------------------------//
app.get("/ELB-HealthChecker/2.0", (req, res) => {
  res.send(200);
});

app.get("/", (req, res) => {
  res.send("Welcome to the Vehicle Tracking API");
});

// ----------------- Routes ----------------------------------------------------//
app.use("/api", authRoutes);
app.use("/api", auth, vehicleRoutes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
