var express = require("express");
var app = express();
app.listen(3000, listening);
function listening() {
  console.log("listening on 3000");
}
var birds = {
  "parrot": 20,
  "eagle": 10,
  "hen":100,
};
app.get('/all', allBirds);
function allBirds(req, res) {
  res.send(birds)
};
app.get('/add/:bird/:score?', addBirds);
function addBirds(req, res) {
  var data = req.params;
  var bird = data.bird;
  var score = data.score;
  birds[bird] = score;
  var message = {
    msg: "thnak you",
  };
  res.send(message);
}





