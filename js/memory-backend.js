function Simon() {
  this.blue = "blue";
  this.red = "red";
  this.green = "green";
  this.yellow = "yellow";
}

Simon.prototype.playGame = function(turn) {
  var output = [];
  var colors = [this.blue, this.green, this.yellow, this.red];
  for (var i = 0; i < turn; i++) {
    output.push(colors[Math.floor(Math.random() * 4)]);
  }
  return output;
};
