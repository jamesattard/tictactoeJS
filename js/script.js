$(document).ready(function() {

  var x = "X";
  var o = "O";
  var human = x;
  var ai = o;
  var cells = [
    $('#cell0'), $('#cell1'), $('#cell2'),
    $('#cell3'), $('#cell4'), $('#cell5'),
    $('#cell6'), $('#cell7'), $('#cell8')
  ];
  var turns = 0;
  var available;

  function checkLine(char, spot1, spot2, spot3) {
    if (cells[spot1].text() == char && cells[spot2].text() == char && cells[spot3].text() == char) {
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

  function clearCells() {
    for (var i=0; i<cells.length; i++) {
      cells[i].text('');
      cells[i].removeClass(human);
      cells[i].removeClass(ai);
    }
    turns = 0;
  }

  $('.tttBox').click(function() {
    if ($(this).text() != x && $(this).text() != o && turns < 9) {
      // if cell is not occupied by Human/AI, fill it
      $(this).text(human);
      $(this).addClass(human);
      turns++;
      if (checkWin(human)) {
        setTimeout(function(){ // delay so we can see winning line
          alert('Human Wins!');
          clearCells();
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
              clearCells();
            }, 250);
          };
        }
      }, 250);

    } else {
      alert("It's a tie!");
      clearCells();
    }
  }); // end of OCF

  $('#resetBtn').click(function() {
    clearCells();
  });

}); // end of DRF
