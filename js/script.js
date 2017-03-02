$(document).ready(function() {

  var x = "X";
  var o = "O";
  var human, ai, available;
  var cells = [
    $('#cell0'), $('#cell1'), $('#cell2'),
    $('#cell3'), $('#cell4'), $('#cell5'),
    $('#cell6'), $('#cell7'), $('#cell8')
  ];
  var turns = 0;

  function checkLine(char, spot1, spot2, spot3) {
    if (cells[spot1].text() == char && cells[spot2].text() == char && cells[spot3].text() == char) {
      cells[spot1].css("background-color", "white");
      cells[spot2].css("background-color", "white");
      cells[spot3].css("background-color", "white");
      return true;
    } else {
      return false;
    }
  }

  function checkWin(player) {
    if (checkLine(player, 0, 1, 2)) return true;
    if (checkLine(player, 3, 4, 5)) return true;
    if (checkLine(player, 6, 7, 8)) return true;
    if (checkLine(player, 0, 3, 6)) return true;
    if (checkLine(player, 1, 4, 7)) return true;
    if (checkLine(player, 2, 5, 8)) return true;
    if (checkLine(player, 0, 4, 8)) return true;
    if (checkLine(player, 2, 4, 6)) return true;
  }

  function init() {
    for (var i=0; i<cells.length; i++) {
      cells[i].text('');
      cells[i].removeClass(human);
      cells[i].removeClass(ai);
      cells[i].css("background-color", "#333");
    }
    turns = 0;
    $('#myModal').modal('show');
  }

  init();

  // Choose X or Y
  $(".select-side").click(function(event) {
      event.preventDefault();
      human = $(this).text();
      $('#myModal').modal('hide');
      human == x ? ai = o : ai = x;
      if (human == o) {
        // AI's turn (random mode)
        locAI = Math.floor(Math.random() * 9); // AI choose cell 0-8
        cells[locAI].text(ai);
        cells[locAI].addClass(ai);
        turns++;
      }
   });

  // Game starts
  $('.tttBox').click(function() {
    if ($(this).text() != x && $(this).text() != o && turns < 9) {
      // if cell is not occupied by Human/AI, fill it
      $(this).text(human);
      $(this).addClass(human);
      turns++;
      if (checkWin(human)) {
        setTimeout(function(){ // delay so we can see winning line
          alert('Human Wins!');
          init();
        }, 250);
      };

      available = true;
      setTimeout(function(){ // delay AI
        while (turns != 0 && turns < 9 && available) {
          // AI's turn (random mode)
          locAI = Math.floor(Math.random() * 9); // AI choose cell 0-8
          // if cell is not occupied by Human/AI, fill it
          if (cells[locAI].text() != x && cells[locAI].text() != o) {
            cells[locAI].text(ai);
            cells[locAI].addClass(ai);
            turns++;
            available = false;
          }
          if (checkWin(ai)) {
            setTimeout(function(){ // delay so we can see winning line
              alert('AI Wins!');
              init();
            }, 250);
          };
        }
      }, 250);

    } else if (turns >= 9) {
      alert("It's a tie!");
      init();
    }
  }); // end of OCF

  $('#resetBtn').click(function() {
    init();
  });

}); // end of DRF
