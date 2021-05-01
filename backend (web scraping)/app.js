var express = require('express');
var path = require('path');
var cors = require('cors')
var scraper = require("./routes/testAPI");

var app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/scrape", scraper);



// catch 404 and forward to error handler
// route for undefined routes
app.use(function(req, res, next) {
  res.send('error')
});

app.listen(9001,()=>{
  console.log(`listening on port 9001`);
})


module.exports = app;
