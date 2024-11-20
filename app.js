const express = require("express");
const cors = require("cors");
require("dotenv").config();
const Router = require('./routes/routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(Router);

app.listen(process.env.PORT, () => console.log(`Server running at port: ${process.env.PORT}`));