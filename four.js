var currentplayer = 1;

function changePlayer() {
  if(currentplayer == 1) {
    currentplayer = 2;
    return "yellow";
  } else {
    currentplayer = 1;
    return "red";
  }
}

function clickedColumn(el) {
  var color = changePlayer();
  var cols = document.getElementsByClassName(el.className);
  for(var i = 0; i < cols.length; ++i) {
    if(cols[i].firstChild.style.backgroundColor == "" && i == cols.length - 1){
      cols[i].firstChild.style.backgroundColor = color;
    }
    else if (cols[i].firstChild.style.backgroundColor != "" && i != 0) {
      if(cols[i - 1].firstChild.style.backgroundColor != ""){
        changePlayer();
        break;
      }
      cols[i - 1].firstChild.style.backgroundColor = color;
      break;
    }
  }
}
