const express = require('express')
const app = express()
const port = 3001
app.set('view engine','ejs');

app.use('/',require('./routes/index'));

app.listen(port, console.log("Listening port 3001"))



/*
app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});

app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});

app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});

app.post('/admin', (req, res) => {
  return res.send('Received a POST HTTP method in admin');
});

app.put('/admin', (req, res) => {
  return res.send('Received a PUT HTTP method in admin');
});

app.delete('/amin', (req, res) => {
  return res.send('Received a DELETE HTTP method in admin');
});

//CRUD boss
app.get('/boss', (req, res) => {
  return res.send('Received a GET HTTP method in boss');
});

app.post('/boss', (req, res) => {
  return res.send('Received a POST HTTP method in boss');
});

app.put('/boss', (req, res) => {
  return res.send('Received a PUT HTTP method in boss');
});

app.delete('/boss', (req, res) => {
  return res.send('Received a DELETE HTTP method in boss');
});

//CRUD employee
app.get('/employee', (req, res) => {
  return res.send('Received a GET HTTP method in employee');
});

app.post('/employee', (req, res) => {
  return res.send('Received a POST HTTP method in employee');
});

app.put('/employee', (req, res) => {
  return res.send('Received a PUT HTTP method in employee');
});

app.delete('/employee', (req, res) => {
  return res.send('Received a DELETE HTTP method in employee');
});
*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


module.exports = app;
