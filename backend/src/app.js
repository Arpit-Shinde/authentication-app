require("dotenv").config()
const express = require("express")
const connectToDB = require("./db")
const User = require("../models/User")
const authRoutes = require("../routes/auth")
const cors = require("cors")

const app = express()
const port = 5001

connectToDB()


app.listen(port, ()=>{
    console.log("server is running")
})

app.use(cors()) //to interact with cors
app.use(express.json())


app.get("/", (req, res)=>{
    res.send("Welcome to the app")
})

app.use("/auth", authRoutes)