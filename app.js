const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Kabanero!");
});
 
module.exports.app = app;
