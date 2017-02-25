$(document).ready(function() {

  window.onload = function() {
    ctx = $('#canvas')[0].getContext("2d");
    draw();
  }

  // Start Canvas Configuration
  var canvasW = $("#canvas").width();
  var canvasH = $("#canvas").height();;
  var boardBg = new Image();
  var boardX = new Image();
  var boardO = new Image();

  boardBg.src = "img/ttt_board.png";
  boardX.src = "img/ttt_x.png";
  boardO.src = "img/ttt_o.png";
  // End Canvas Configuration

  function draw() {
    ctx.clearRect(0, 0, canvasW, canvasH);
    ctx.drawImage(boardBg, 0, 0);
  }

}); //end of DRF
