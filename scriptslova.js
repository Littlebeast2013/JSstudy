/* ------------------deklarace proměnných ---------------------*/
var prelozeno = false;

/*tlačítka pro výpis výstupu*/
var tabuleBtn = document.createElement("button");

/*úprava tlačítek*/
tabuleBtn.style.fontSize = "25px";
tabuleBtn.style.padding = " 20px";
tabuleBtn.style.width="200px";
tabuleBtn.style.height="100px";




var slovaCesky= new Array("nikdy","někdy","včera","možná, asi","podprsenka","strom","král","Děkuji.","porozumět","bez toho","brýle","líný","otázka","na mně","na tobě/na tebe","poslat","malovat","výborný","s","bez","poslouchat","se svojí učitelkou","šťastný");
var slovaAnglicky= new Array("never","sometimes","yesterday","maybe","bra","tree","king","Thank you.","understand","without that","glasses","lazy","question","on me","on you","send","paint","excellent","with","without","listen","with my teacher","happy");
var slovaPracovni=slovaCesky;

	/****vyvěsí tabuli a vypíše na ni vstupní slovo, 
po kliknutí na tabuli ("onclick()") změní stav proměnné "překlad"
****/		
function vypisSlovo(slovo,preklad) {
	if (prelozeno == false) {
	tabuleBtn.textContent = slovo }
	else {
		tabuleBtn.textContent = preklad} 
	document.getElementById("slovo").appendChild(tabuleBtn)
	tabuleBtn.onclick = function () {preloz(slovo,preklad)
								}			
								}
								
/*změní stav proměnné "prelozeno" a vypíše slovo 
(předává si s funkcí "vypisSlovo" proměnné pro vylosované slovo a jeho překlad)*/
function preloz(slovo,preklad) {
	if (prelozeno == true) {prelozeno = false
	}
	else {prelozeno = true}
	vypisSlovo(slovo, preklad)
	}
	
		window.onload = function () {
		vypisSlovo(".","")
}


var tlacitkoStartBtn = document.createElement("button");
tlacitkoStartBtn.style.background="lightgreen";
tlacitkoStartBtn.style.width="200px";
tlacitkoStartBtn.style.height="100px";

window.onload=function tlacitkoStart(popisek) {
  
	tlacitkoStartBtn.textContent = "start"
	document.getElementById("tlacitkoDalsi").appendChild(tlacitkoStartBtn)
	tlacitkoStartBtn.onclick = function () { 		
							zkousej()}	
	}						


var vitaci1 = "Vítejte, kliknutím zobrazíte překlad";
var vitaci2 = "zkoušení slovíček spustíte tlačítkem 'START'";

var d=getDate();
var x=d.getHours();

function zkousej() {
	var losovane = Math.floor((Math.random()*slovaPracovni.length));
	vypisSlovo(slovaCesky[losovane],slovaAnglicky[losovane]);
	tlacitkoStartBtn.appendChild = x;
}


//function vykresliMenu(slovo,preklad,popisek) {
	//vypisSlovo(slovo,preklad);