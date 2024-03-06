"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const API = require("./constants/api");
const PageNotFound = require('./errors/page-not-found-error');

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req,res,next)=>{
  res.json({
    message: "Welcome. We are on Home Page"
  });
});

app.all("*", () => {
  throw new PageNotFound();
});


module.exports = app;

