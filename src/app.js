const express = require('express');
const connectDB = require('./config/database');
const User = require('./models/user');
const app = express();

app.use(express.json());

app.get("/user", async(req,res) => {
    const userEmail = req.body.emailId;
    const userId = req.body._id;
    try {
        let response = await User.find({ emailId: userEmail});
        if (response.length === 0) {
            res.status(404).send("User not found")
        } else {
            res.send(response);
        }
    } catch (error) {
        res.status(401).send("something went wrong")
    }

    // try {
    //     let response = await User.findOne({ emailId: userEmail});
    //     if (!response) {
    //         res.status(404).send("User not found")
    //     } else {
    //         res.send(response);
    //     }
    // } catch (error) {
    //     res.status(401).send("something went wrong")
    // }

    // try {
    //     let response = await User.findById({ _id:userId });
    //     if (!response) {
    //         res.status(404).send("User not found")
    //     } else {
    //         res.send(response);
    //     }
    // } catch (error) {
    //     res.status(401).send("something went wrong")
    // }
})
app.get("/feed", async(req,res) => {
    try {
        let response = await User.find({});
        if (response.length === 0) {
            res.status(404).send("User not found")
        } else {
            res.send(response);
        }
    } catch (error) {
        res.status(401).send("something went wrong")
    }

})
app.post('/signup', async (req, res)=> {
    req.body
    const user = new User(req.body)
    try {
        await user.save()
        res.send("User saved successfully")
    } catch (error) {
        res.status(400).send("error while save user", error.message)
    }
  
})

connectDB().then(()=>{
console.log("Database connection established")
app.listen(5000, () => {
    console.log(`Server listening to the port 5000`);
});
}).catch(err => console.error("Error connecting"))

