const mongoose = require('mongoose');

connectDB = async () => {
await mongoose.connect("mongodb+srv://rama1998thakur:vjCImbI2B5Y0zYpI@learnnode.qzsbi.mongodb.net/devTinder")
}

module.exports = connectDB