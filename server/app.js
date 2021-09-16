//dependencies
const express = require('express');
const dotev = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

//internal imports
const { notFoundHandler, defaultErrorHandler } = require('./middlewares/common/errorHandlers');
const userRouter = require('./routers/userRouter');
const imageRouter = require('./routers/imageRouter');

//intitialise the app
const app = express();

//initialise dot env
dotev.config();

//*default middlewares
app.use((req, res, next) => {
   console.log(req.header('Origin'));
   next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//setup cors

const corsOptions = {
   origin: ['http://localhost:3000', 'https://myunsplashapi.herokuapp.com'],
   credentials: true,
   optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(cookieParser(process.env.COOKIE_SECRET_KEY));

//database connection
mongoose
   .connect(process.env.MONGOOSE_CONNECTION_STRING)
   .then(() => console.log(`App is sucessfully connected to database`))
   .catch((error) => console.log(error));

//routes
app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);
//app.use('/api/category', categoryHandler); //TODO: neeed to create category handler

//404 not found handler
app.all('*', notFoundHandler);

//default error handler
app.use(defaultErrorHandler);

app.listen(process.env.PORT, () => console.log(`App is alive on localhost:${process.env.PORT}`));
