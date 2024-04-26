const express = require("express");
const bodyParser = require("body-parser");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const dbConnect = require("./config/databaseConnect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
dbConnect()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/userRoute')
const eventRoute = require('./routes/eventRoute')
const bookingRoute = require('./routes/bookingRoute')
app.use('/api/user',userRoute)
app.use('/api/event',eventRoute)
app.use('/api/booking',bookingRoute)
app.use(notFound);
app.use(errorHandler);
app.use(cookieParser());
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
  });