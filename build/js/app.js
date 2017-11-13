(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
