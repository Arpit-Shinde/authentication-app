const express = require("express")
const router = express.Router()
const User = require("../models/User")

router.post("/signup", async (req, res)=>{
    const {username, email, password} = req.body //extract 

    let newUser = new User({ //create the object
        username: username,
        email: email,
        password: password
    })

    await newUser.save() //save it in database. we are using await, because this task might take time

    console.log("user saved")
    res.send("user saved")
})

router.post("/login", async (req, res) => {
    // 1. Extract exactly what Postman sends. the "email", "password" (on lhs), etc must match to the keys in postman request body
    const { email, password } = req.body;

    // 2. Search using the standard 'email' variable
    const user = await User.findOne({ email: email });

    if (!user) {
        res.send("Invalid email or password");
        return 
    }

    // 3. Compare using the standard 'password' variable
    if (password !== user.password) {
        res.send("Invalid email or password");
        return 
    }

    res.send(`Welcome`);
});

module.exports = router
