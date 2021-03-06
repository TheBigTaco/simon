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

Simon.prototype.displayColors = function(turn, array)
{
  var counter = 0;
  var display = setInterval(function(){
    $("#output").html("<li>"+array[counter]+"</li>");
    console.log(array[counter]);
    counter++;
    if(counter >= turn){
      clearInterval(display);
      setTimeout(function(){
        $("#output").empty();
      }, 1000);
    }
  }, 1000);
}

$(document).ready(function(){
  $("#start").click(function(event){
    event.preventDefault();
    var simon = new Simon();
    var result = simon.playGame(5);
    var display = simon.displayColors(5, result);
  });
});
