const mongoose = require('mongoose')

const dbConnect = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log("connected");
      } catch (error) {
        console.log("invalid database");
      }
}
module.exports = dbConnect