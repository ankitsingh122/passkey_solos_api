import express from 'express';
const Route = express.Router();
const admin = require('./admin');

for (const property in admin) {
  Route.use('/admin', admin[property]);
}

export default Route;
