var x;
x=0;
var y;
y=1;

function correct2() {
 alert("Správně!"); document.getElementById("demo").innerHTML = "dobře!";
document.getElementById("demo3").innerHTML = "dobře!";document.getElementById("demo4").innerHTML = "dobře!";document.getElementById("demo5").innerHTML = "dobře!";document.getElementById("demo6").innerHTML = "dobře!";
 
}

function wrong2(){
//window.location.href = "https://dusan.pc-slany.cz";
    alert("Špatně! Zkus to znovu!");
document.getElementById("demo",).innerHTML = "špatně!"; document.getElementById("demo3",).innerHTML = "špatně!";document.getElementById("demo4",).innerHTML = "špatně!";document.getElementById("demo5",).innerHTML = "špatně!";document.getElementById("demo6",).innerHTML = "špatně!";
    document.getElementById("demo2",).innerHTML = "Počet chyb:" + (x+y);
x++;
}





/*x= prompt("Zadej svoje jméno", "");;

if (x=="Petra")
{document.write("Vítej, má paní");}
else
  {document.write("Uživatel "+x +" nemá oprávnění upravovat tento dokument");}

pokracovat = confirm("chcete pokračovat?");
// nyní mám v proměnné pokracovat uloženo true nebo false
if(pokracovat) document.write(" tak tedy pokračujeme");
*/