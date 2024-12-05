

import express from 'express';
import {pinoHttp, logger} from './utils/logging.js';

const app = express();

app.use(pinoHttp);


app.get('/', async (req, res) => {
  
  logger.info({logField: 'custom-entry', arbitraryField: 'custom-entry'}); 
  
  res.send('I am here to learn GCP!');
});

export default app;
