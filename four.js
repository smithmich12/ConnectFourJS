const boardwidth = 7;
const boardheight = 6;

var board = [];
var count = 0;
for(var i = 0; i < boardheight; i++) {
  board[i] = [];
  for(var j = 0; j < boardwidth; j++){
    board[i][j] = count++;
  }
}


function clickedColumn(el) {
  var cols = document.getElementsByClassName(el.className);
  for(var i = 0; i < cols.length; ++i) {
    if(cols[i].firstChild.style.backgroundColor == "" && i == cols.length - 1)
      cols[i].firstChild.style.backgroundColor = "red";
    else if (cols[i].firstChild.style.backgroundColor != "" && i != 0)
      cols[i - 1].firstChild.style.backgroundColor = "yellow";
  }
}


console.table(board);
