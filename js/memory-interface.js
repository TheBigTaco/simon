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
