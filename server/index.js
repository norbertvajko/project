const express = require("express");
const passportSetup = require("./passport");
const passport = require("passport");
const cors = require("cors");
const authRoute = require("./routes/auth");
const session = require("express-session");
const cookieSession = require("cookie-session");
const app = express();

// Use cookie-session for storing session data in cookies
app.use(
    cookieSession({
        name: "session",
        keys: ["Norbi"],
        maxAge: 24 * 60 * 60 * 1000, // Fix typo: 24 hours in milliseconds
    })
);

// Use express-session for handling session and store it in memory (not suitable for production)
app.use(
    session({
        secret: "your-secret-key",
        resave: true,
        saveUninitialized: true,
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}))

app.use("/auth", authRoute);

app.listen(5000, () => {
    console.log("Server is running..");
});
