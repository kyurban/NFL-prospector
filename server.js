const express = require("express");
const sequelize = require('./db');
const port = process.env.PORT;
const app = express();
const prospectRoute = require("./routes/prospectRoute.js");

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'));

//routes
app.use("/prospects", prospectRoute)

//dashboard
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/publc/index.html');
});

// local host
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

// DB connection
sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch((error) => console.log('Error syncing database:', error));