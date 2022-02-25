const express = require('express')
const app = express()
// app.use(express.json())
app.get('/', function (req, res) {
  res.send({
    data:"hi,khurshid",
  });
});

app.listen(5000)