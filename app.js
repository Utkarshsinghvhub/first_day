import express,{urlencoded} from "express";
import dotenv from "dotenv";
import {connectPassport} from "./utils/Provider.js"
import session from "express-session";
import passport from "passport";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

const app=express();
export default app;

//for connection
dotenv.config({
    path:"./config/config.env",
})

// Using Middlewares
app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    })
);



app.use(cookieParser());
app.use(express.json());
app.use(
  urlencoded({
    extended: true,
  })
);




app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());


connectPassport();

//import routes
import userRoute from "./routes/user.js";
import orderRoute from "./routes/order.js";

app.use("/api/v1",userRoute);
app.use("/api/v1",orderRoute);




// Using Error Middleware
app.use(errorMiddleware);