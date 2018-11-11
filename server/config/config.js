import { config } from 'dotenv';

config();

module.exports =  {
  mongoURI: process.env.CONNECTDB
};
