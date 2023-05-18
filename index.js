console.log("server is running");
var express = require('express');
var app = express();
app.listen(3000, listening);
function listening() {
    console.log("listening....");

};
 var flowers = ["tulip", "rose"];
app.use(express.static('website'));
app.get('/flowers', function (req, res) {
   
    res.send(flowers);
});

