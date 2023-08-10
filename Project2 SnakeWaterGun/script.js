let user = prompt("S,W or G");
let CPUI = Math.floor(Math.random() * 3);
let CPU = ["S", "W", "G"][CPUI]

const Match = (CPU, user) => {
  if (CPU === user) {
    return "Nobuddy";
  }
  else if (CPU == "S" && user == "W") {
    return "CPU";
  }
  else if (CPU == "S" && user == "G") {
    return "user";
  }
  else if (CPU == "W" && user == "S") {
    return "user";
  }
  else if (CPU == "W" && user == "G") {
    return "CPU";
  }
  else if (CPU == "G" && user == "S") {
    return "CPU";
  }
  else if (CPU == "G" && user == "W") {
    return "user";
  }
}

let result = Match(CPU, user);
document.write(`CPU :${CPU} <br> User:${user} <br> The winner is: ${result.toUpperCase()}`);
