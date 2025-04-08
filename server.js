const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT;
const password = process.env.DB_PASSWORD;
const username = process.env.NAME;
const app = express();
const prospectRoute = require("./routes/prospectRoute.js");

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//routes
app.use("/prospects", prospectRoute)

// local host
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

// DB connection
mongoose.connect(`mongodb+srv://${username}:${password}@2025-nfl-draft-prospect.n8lhray.mongodb.net/draft-prospects?retryWrites=true&w=majority&appName=2025-NFL-draft-prospects`)
    .then(() => {
        console.log("DB connected successfully");
    })
    .catch(() => {
        console.log("DB connection failed");
    });