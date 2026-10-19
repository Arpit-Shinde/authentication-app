require("dotenv").config()
const express = require("express")
const connectToDB = require("./db")
const User = require("../models/User")
const authRoutes = require("../routes/auth")
const cors = require("cors")

const app = express()
const port = process.env.port || 5001 //use port given by hosting service or default to 5001.

app.use(cors()) //to interact with cors
app.use(express.json())

connectToDB()

app.get("/", (req, res)=>{
    res.send("Welcome to the app")
})

app.use("/auth", authRoutes)

app.listen(port, ()=>{
    console.log("server is running")
})