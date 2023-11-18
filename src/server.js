const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./config/db/mongoDB.conect');
const { route } = require('./routes/routes');
const swaggerUI = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const fs = require('fs');
const yaml = require('yaml')
const path = require('path');


const file = fs.readFileSync(path.resolve('api-gateway.yaml'), 'utf-8')
const swaggerDocus = yaml.parse(file)

require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT;

db.connectMongo();

// auto generate api document
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Spa Booking API Documents',
      version: '1.0.0',
      description: 'API server app spa booking backend with Express.js',
      contact: {
        name: 'devhungtran',
        url: 'dev',
        email: 'devhungtran@gmail.com',
      },
    },
    servers: [
      {
        url: process.env.HOST,
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};
const specs = swaggerJsdoc(options);
app.use('/api-documents', swaggerUI.serve, swaggerUI.setup(specs));

app.use('/', route);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
