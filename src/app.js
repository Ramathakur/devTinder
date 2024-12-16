const express = require('express');
const connectDB = require('./config/database');
const User = require('./models/user');
const app = express();

app.post('/signup', async (req, res)=> {
    const user = new User({
        firstName:"charu",
        lastName:"thakur",
        emailId:"charu@gmail.com",
        password:"12345"
    })
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

