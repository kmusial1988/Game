var haslo = "";
let key = "";
const countries = [
  { name: "Albania", capital: "Tirana" },
  { name: "Polska", capital: "Warszawa" },
  { name: "Niemcy", capital: "Berlin" },
  { name: "Afghanistan", capital: "Kabul" },
  { name: "Albania", capital: "Tirana" },
  { name: "Algeria", capital: "Algiers" }, 
  { name: "Andorra", capital: "Andorra la Vella" },
  { name: "Angola", capital: "Luanda" },
  { name: "Argentina", capital: "Buenos Aires" },
  { name: "Armenia", capital: "Yerevan" },
  { name: "Australia", capital: "Canberra" },
  { name: "Austria", capital: "Vienna" },
  { name: "Azerbaijan", capital: "Baku" },
  { name: "Bahamas", capital: "Nassau" },
  { name: "Bahrain", capital: "Manama" },
  { name: "Bangladesh", capital: "Dhaka" },
  { name: "Barbados", capital: "Bridgetown" },
  { name: "Belarus", capital: "Minsk" },
  { name: "Belgium", capital: "Brussels" },
  { name: "Belize", capital: "Belmopan" },
  { name: "Bhutan", capital: "Thimphu" },
  { name: "Bolivia", capital: "La Paz" },
  { name: "Bosnia and Herzegovina", capital: "Sarajevo" },
  { name: "Botswana", capital: "Gaborone" },
  { name: "Brazil", capital: "Brasilia" },
  { name: "Brunei", capital: "Bandar Seri Begawan" },
  { name: "Bulgaria", capital: "Sofia" },
  { name: "Burkina Faso", capital: "Ouagadougou" },
  { name: "Burundi", capital: "Bujumbura" },
  { name: "Cabo Verde", capital: "Praia" },
  { name: "Cambodia", capital: "Phnom Penh" },
  { name: "Cameroon", capital: "Yaounde" },
  { name: "Canada", capital: "Ottawa" },

];
const setPass = (countries) => {
  let randomnr = Math.floor(Math.random() * (countries.length - 1 - 0 + 1)) + 0; 
  key = countries[randomnr].name;
  haslo = countries[randomnr].capital; 
  
};
setPass(countries);
function key_div() {
  document.getElementById("key").innerHTML = key;
}
key_div();
haslo = haslo.toUpperCase();
var ukryte_haslo = "";
var dlugosc = haslo.length;

var letters = new Array(35);

var un_hit = 0;

letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ź";
letters[34] = "Ż";

for (i = 0; i < dlugosc; i++) {
  if (haslo.charAt(i) == " ") ukryte_haslo = ukryte_haslo + " ";
  else ukryte_haslo = ukryte_haslo + "-";
}

function set_password() {
  document.getElementById("haslo").innerHTML = ukryte_haslo;
}

function generate_letters() {
  var letters_div = "";
  
  for (i = 0; i < 35; i++) {
    letters_div =
      letters_div +
      '<div class="letter" onClick="check(' +
      i +
      ')" id= "lit' +
      i +
      '">' +
      letters[i] +
      "</div>";
    if ((i + 1) % 7 == 0)
      letters_div = letters_div + '<div style="clear:both"></div>';
  }

  document.getElementById("letters").innerHTML = letters_div;
}

function start() {
  set_password();
  generate_letters();
}
function buttonClicked() {
  location.reload();
}


const btn = document.getElementById("start_game");
btn.addEventListener("click", buttonClicked);



window.onload = start;

function check(nr) {
  var hit = false;

  for (i = 0; i < dlugosc; i++) {
    if (haslo.charAt(i) == letters[nr]) {
      ukryte_haslo =
        ukryte_haslo.substr(0, i) + letters[nr] + ukryte_haslo.substr(i + 1);
      var element_id = "lit" + nr;
      document.getElementById(element_id).style.background = "#006a2a";
      document.getElementById(element_id).style.color = "#10ff6e";
      document.getElementById(element_id).style.border = "2px solid #10ff6e";
      hit = true;
    }
  }

  if (hit) {
  } else {
    un_hit = un_hit + 1;
    document.getElementById("live").innerHTML =
      '<img src="pic/p' + un_hit + '.png"#006a2a/>';
    var element_id = "lit" + nr;
    document.getElementById(element_id).style.background = "#550000";
    document.getElementById(element_id).style.color = "red";
    document.getElementById(element_id).style.border = "2px solid red";
    document.getElementById(element_id).setAttribute("onclick", ";");
  }

  set_password();

  if (un_hit >= 5) {
    document.getElementById("letters").innerHTML = " Game Over !!!!";
    document.getElementById("letters").style.color = "red";
  }

  if (haslo == ukryte_haslo) {
    document.getElementById("letters").innerHTML = " You WIN !!!!";
    document.getElementById("letters").style.color = "#10ff6e";
  }
}
