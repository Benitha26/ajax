(function(){
    var getPlayerInfo = new XMLHttpRequest();

    getPlayerInfo.open("GET", "soccer.json");
    getPlayerInfo.send();

    getPlayerInfo.onreadystatechange = function() {
      if (getPlayerInfo.readyState === 4) {
        if (getPlayerInfo.status === 200) {
          var players = JSON.parse(getPlayerInfo.responseText),
              text = document.getElementById("textTarget");
          for (i in players) {
            var newDiv = document.createElement("div");
            newDiv.innerHTML = players[i].playerOne+players[i].playerTwo+players[i].playerThree;
            text.appendChild(newDiv);
          }
        }
      }
    }
})();