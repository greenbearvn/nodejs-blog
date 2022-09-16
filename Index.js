const express = require('express')
const app = express()
const port = 5500

app.get('/', (req, res) => {

    var a = 1;
    var b = 2;

    var c = 'Hello World!';

  res.writable(c)
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})