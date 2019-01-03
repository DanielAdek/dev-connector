import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import jsend from 'jsend';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import handleRoutesNotFound from './routes/notFound';
import connectString from './config/config';

dotenv.config();
const app = express();

const db = connectString.mongoURI;

mongoose
  .connect(db)
  .then(() => {
    console.log('Mongodb connected!');
  })
  .catch(err => console.log(`error ${err.message}`));

const urlencoded = bodyParser.urlencoded({
  extended: false
});
const json = bodyParser.json();
const port = parseInt(process.env.PORT, 10);

// USE CORS TO AVOID CROSS ORIGIN CONFLICT
app.use(cors());


app.use(jsend.middleware);
app.use(urlencoded);
app.use(json);
app.use(jsend.middleware);


// Use user routes
app.use(handleRoutesNotFound);

app.listen(port, () => console.log(`server is running on port ${port}`));

export default app;
