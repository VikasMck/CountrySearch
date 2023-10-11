const express = require('express');//express web framework
const sql = require('mssql');//for sql server
const ejs = require('ejs'); //embedded js
const readlineSync = require('readline-sync'); //for hidden passwords

const app = express();

const config = {
  user: 'vikas',
  password: '', 
  server: 'localhost',
  database: 'LocalConnections',

  //sql server ssl ecryption
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

//chose this instead of readline for the sake of password being hidden in the terminal
config.password = readlineSync.question('Enter the password: ', {
  hideEchoBack: true, 
});

//define route handler
app.get('/', (req, res) => {
  
  sql.connect(config, function (err) {
    if (err) {
      console.error('Not connected:', err.message);
      res.status(500).send('Connection error');
    }
     else {
      //request to run sql queries
      const request = new sql.Request();
      request.query('SELECT country_name FROM Countries', function (err, recordset) {
        if (err) {
          console.error('Query error:', err.message);
          res.status(500).send('Query error');
        } 
        else {
          sql.close();
          //render using ejs to index.ejs
          ejs.renderFile(__dirname + '/views/index.ejs', { results: recordset.recordset }, function (err, data) {
            if (err) {
              console.error('EJS error:', err);
              res.status(500).send('EJS error');
            } 
            else {
              //send data to client
              res.send(data);
            }
          });
        }
      });
    }
  });
});

//start server, 1010 port
app.listen(1010, () => {
  console.log('Server is up');
});
