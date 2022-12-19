const express = require('express')
const app = express()
const cors = require('cors')


const port = 3001
app.set('view engine','ejs');

app.use(express.json())

app.use(cors())
app.use('/',require('./routes/index'));

app.listen(port, console.log("Listening port 3001"))

app.get('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});
app.use(function(req, res, next) {
  next(createError(404));
});


module.exports = app;
