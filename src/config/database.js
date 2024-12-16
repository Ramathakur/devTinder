const mongoose = require('mongoose');

connectDB = async () => {
await mongoose.connect("mongodb+srv://rama1998thakur:vjCImbI2B5Y0zYpI@learnnode.qzsbi.mongodb.net/devTinder")
}

// connectDB().then(()=>{
// console.log("Database connection established")
// }).catch(err => console.error("Error connecting"))

module.exports = connectDB