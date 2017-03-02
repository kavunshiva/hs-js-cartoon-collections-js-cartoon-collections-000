function dwarfRollCall(dwarves) {
  var dwarfString = "";
  for (var i = 0; i < dwarves.length; i++) {
    dwarfString = dwarfString.concat(`${i + 1}. ${dwarves[i]} `);
  }
  return dwarfString;
}

function summonCaptainPlanet(planeteerCalls){
  var summonArray = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
    summonArray.push(`${planeteerCalls[i].toUpperCase()}!`);
  }
  return summonArray;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4) return true;
  }
  return false;
}

function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++) {
    if (foods[i] === "cheddar" ||
      foods[i] === "gouda" ||
      foods[i] === "camembert")
        return foods[i];
  }
  return "no cheese!";
}
