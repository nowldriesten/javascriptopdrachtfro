//begin Rechthoek
let lengte = document.getElementById('lengte');
let breedte = document.getElementById('breedte');
let oppervlakte = document.getElementById('oppervlakte');
let omtrek = document.getElementById('omtrek');
let berekenKnop = document.getElementById('bereken');
let rechthoek = document.getElementById('rechthoek');
let diagonaal =document.getElementById('diagonaal');
let ctx = rechthoek.getContext("2d");

bereken.addEventListener('click', berekening);

function berekening() {
  console.log("je hebt op de knop geklikt");
  if (isNaN(lengte.value) == false && isNaN(breedte.value) == false) {
    console.log("je hebt een nummer in gevoerd");
    oppervlakte.innerHTML = parseInt(lengte.value) * parseInt(breedte.value);
    omtrek.innerHTML = 2 * parseInt(lengte.value) + 2 * parseInt(breedte.value);
    diagonaal.innerHTML = Math.sqrt(Math.pow(parseInt(lengte.value), 2) + Math.pow(parseInt(breedte.value), 2));
    console.log(diagonaal);
    //rechthoek tekening test
    ctx.fillStyle = "#f09da7";
    ctx.fillRect(0, 0, 5 * parseInt(breedte.value), 5 * parseInt(lengte.value));
    //einde Rechthoek



  } else {
    console.log("niet een cijfer ingevuld");
  }
}


//einde rechthoek
