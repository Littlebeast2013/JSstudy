function ukazCas(){   

let d = new Date();
let day = d.getDate();
let mon = d.getMonth();
let year = d.getYear();

let hod = d.getHours();
let min = d.getMinutes();
let sec = d.getSeconds();
  
    function casBezPm() {
    if (hod>11) {hod=hod-12} };
 casBezPm()
  
  
  
  
   function beznyText(){
     
    if (hod==1) 
    
    {{if (min==0)
    {document.getElementById("hodinyCesky").textContent ="Je "+hod+  " hodina.";}
   
     else if (min==1)
    {document.getElementById("hodinyCesky").textContent ="Je "+hod+  " hodina a " +min + " minuta."}
   
    else if (min==2|| min==3||min==4)
     {document.getElementById("hodinyCesky").textContent ="Je "+hod+  " hodina a " +min + " minuta."}
   
   else
   {document.getElementById("hodinyCesky").textContent ="Je "+hod+  " hodina a " +min + " minut.";}
  }};
   
      if (hod==1) 
    
    {{if (min==0)
    {document.getElementById("hodinyCesky").textContent ="Je "+hod+  " hodina.";}
   
     else if (min==1)
    {document.getElementById("hodinyCesky").textContent ="Je "+hod+  " hodina a " +min + " minuta."}
   
    else if (min==2|| min==3||min==4)
     {document.getElementById("hodinyCesky").textContent ="Je "+hod+  " hodina a " +min + " minuta."}
   
   else
   {document.getElementById("hodinyCesky").textContent ="Je "+hod+  " hodina a " +min + " minut.";}
  }}
  
  else if (hod==2|| hod==3||hod==4)
    
    {{if (min==0)
    {document.getElementById("hodinyCesky").textContent ="Jsou "+hod+  " hodiny.";}
   
     else if (min==1)
    {document.getElementById("hodinyCesky").textContent ="Jsou "+hod+  " hodiny a " +min + " minuta."}
   
    else if (min==2|| min==3||min==4)
     {document.getElementById("hodinyCesky").textContent ="Jsou "+hod+  " hodiny a " +min + " minuta."}
   
   else
   {document.getElementById("hodinyCesky").textContent ="Jsou "+hod+  " hodiny a " +min + " minut.";}
  }} 
  
  
  else{ {if (min==0)
    {document.getElementById("hodinyCesky").textContent ="Je "+hod+  " hodin.";}
   
     else if (min==1)
    {document.getElementById("hodinyCesky").textContent ="Je "+hod+  " hodin a " +min + " minuta."}
   
    else if (min==2|| min==3||min==4)
     {document.getElementById("hodinyCesky").textContent ="Je "+hod+  " hodin a " +min + " minuta."}
   
   else
   {document.getElementById("hodinyCesky").textContent ="Je "+hod+  " hodin a " +min + " minut.";}
  }
  };}
  
  beznyText();
  
  
function spec()
  {if (min==15 && hod==0)
    {document.getElementById("hodinyCesky").textContent ="Je čtvrt na jednu.";}
   
     else if (min==15 && hod==1)
    {document.getElementById("hodinyCesky").textContent ="Je čtvrt na dvě."}
   
   else if (min==15 && hod==2)
    {document.getElementById("hodinyCesky").textContent ="Je čtvrt na tři."}
   
   else if (min==15 && hod==3)
    {document.getElementById("hodinyCesky").textContent ="Je čtvrt na čtyři."}
   
     else if (min==15 && hod==4)
    {document.getElementById("hodinyCesky").textContent ="Je čtvrt na pět."}
     else if (min==15 && hod==5)
    {document.getElementById("hodinyCesky").textContent ="Je čtvrt na šest."}
     else if (min==15 && hod==6)
    {document.getElementById("hodinyCesky").textContent ="Je čtvrt na 7."}
   else if (min==15 && hod==7)
    {document.getElementById("hodinyCesky").textContent ="Je čtvrt na 8."}
   else if (min==15 && hod==8)
    {document.getElementById("hodinyCesky").textContent ="Je čtvrt na 9."}
   else if (min==15 && hod==9)
    {document.getElementById("hodinyCesky").textContent ="Je čtvrt na 10."}
   else if (min==15 && hod==10)
    {document.getElementById("hodinyCesky").textContent ="Je čtvrt na 11."}
   else if (min==15 && hod==11)
    {document.getElementById("hodinyCesky").textContent ="Je čtvrt na 12."}

   
   else if (min==45 && hod==0)
    {document.getElementById("hodinyCesky").textContent ="Je tři čtvrtě na jednu.";}
   
     else if (min==45 && hod==1)
    {document.getElementById("hodinyCesky").textContent ="Je tři čtvrtě na dvě."}
   
   else if (min==45 && hod==2)
    {document.getElementById("hodinyCesky").textContent ="Je tři čtvrtě na tři."}
   
   else if (min==45 && hod==3)
    {document.getElementById("hodinyCesky").textContent ="Je tři čtvrtě na čtyři."}
   
     else if (min==45 && hod==4)
    {document.getElementById("hodinyCesky").textContent ="Je tři čtvrtě na pět."}
     else if (min==45 && hod==5)
    {document.getElementById("hodinyCesky").textContent ="Je tři čtvrtě na šest."}
     else if (min==45 && hod==6)
    {document.getElementById("hodinyCesky").textContent ="Je tři čtvrtě na sedm."}
   else if (min==45 && hod==7)
    {document.getElementById("hodinyCesky").textContent ="Je tři čtvrtě na osm."}
   else if (min==45 && hod==8)
    {document.getElementById("hodinyCesky").textContent ="Je tři čtvrtě na devět."}
   else if (min==45 && hod==9)
    {document.getElementById("hodinyCesky").textContent ="Je tři čtvrtě na deset."}
   else if (min==45 && hod==10)
    {document.getElementById("hodinyCesky").textContent ="Je tři čtvrtě na jedenáct."}
   else if (min==45 && hod==11)
    {document.getElementById("hodinyCesky").textContent ="Je tři čtvrtě na dvanáct."}
   
   
   
   else if (min==30 && hod==0)
    {document.getElementById("hodinyCesky").textContent ="Je půl jedné.";}
   
     else if (min==45 && hod==1)
    {document.getElementById("hodinyCesky").textContent ="Je půl druhé."}
   
   else if (min==45 && hod==2)
    {document.getElementById("hodinyCesky").textContent ="Je půl třetí."}
   
   else if (min==45 && hod==3)
    {document.getElementById("hodinyCesky").textContent ="Je půl čtvrté."}
   
     else if (min==45 && hod==4)
    {document.getElementById("hodinyCesky").textContent ="Je půl páté."}
     else if (min==45 && hod==5)
    {document.getElementById("hodinyCesky").textContent ="Je půl šesté."}
     else if (min==45 && hod==6)
    {document.getElementById("hodinyCesky").textContent ="Je půl sedmé."}
   else if (min==45 && hod==7)
    {document.getElementById("hodinyCesky").textContent ="Je půl osmé."}
   else if (min==45 && hod==8)
    {document.getElementById("hodinyCesky").textContent ="Je půl deváté."}
   else if (min==45 && hod==9)
    {document.getElementById("hodinyCesky").textContent ="Je půl desáté."}
   else if (min==45 && hod==10)
    {document.getElementById("hodinyCesky").textContent ="Je půl jedenácté."}
   else if (min==45 && hod==11)
    {document.getElementById("hodinyCesky").textContent ="Je půl dvanácté."}
  }
  spec();
  
  function superSpec()
  { if (min==00 && hod==12)
    {document.getElementById("hodinyCesky").textContent ="Je poledne."}
   else if (min==00 && hod==00)
    {document.getElementById("hodinyCesky").textContent ="Je půlnoc."
  };};
  superSpec();
  
  
  
  function pridejNulyMin() {
    if (min<10) {min="0"+min} };
function pridejNulySec() {
    if (sec<10) {sec="0"+sec} };
  
   pridejNulyMin();
    pridejNulySec();
  
  
let text=document.getElementById("hodinyCesky");
  
 
 
document.getElementById("cas").textContent = hod + " : " + min + " : " + sec; /* adding time to the div */
document.getElementById("datum").textContent = day+". "+mon+". "+(year+1900);}
ukazCas();
setInterval(ukazCas, 1000);

document.getElementById("cas").style.fontSize="55px";
document.getElementById("cas").style.fontWeight="700";

document.getElementById("hodinyCesky").style.fontSize="25px";
document.getElementById("hodinyCesky").style.fontWeight="600";

document.getElementById("datum").style.fontSize="25px";
document.getElementById("datum").style.fontWeight="600";


//function pridejText (){
 // if (min==0 & hod==0)
  //  {text.textContent ="Je půlnoc."}
 // else if (min=="33" & hod=="12")
//    {document.getElementById("hodinyCesky").textContent ="Je půlnoc."};
//  pridejText();}