

function gestoreLoad() {
	
	try {
	   nodoOpenMenu = document.getElementById("open");
	   nodoOpenMenu.onclick = gestoreApriMenu;
 
	   nodoCloseMenu = document.getElementById("close");
	   nodoCloseMenu.onclick = gestoreChiudiMenu;
	  
 
	   nodoMenu = document.getElementById("menu");
	   nodoLink = nodoMenu.getElementsByTagName("a");
	   for (var i=0; i < nodoLink.length; i++) {
		  nodoLink[i].onclick = gestoreChiudiMenu;
	   }
 
  
	} catch ( e ) {
	   alert ("gestoreLoad " + e);
	}
 }
 window.onload = gestoreLoad;

 // funzione che apre il menu
function gestoreApriMenu() {
	try {
	   nodoMenu.style.width = "250px";
	} catch ( e ) {
	   alert ("gestoreApriMenu " + e);
	} 
 }
 
 // funzione che chiude il menu
 function gestoreChiudiMenu() {
	try {
	   nodoMenu.style.width = "0";
	} catch ( e ) {
	   alert ("gestoreChiudiMenu " + e);
	} 
 } 


var PulsantiGioco["1","1","3","2","2","3","1"];

var Profili=[
	{id: "1",
	titolo: "Profilo AIUTO",
	descrizione: "Anvedi o"},
	{id: "2",
	titolo: "Profilo AIUTO",
	descrizione: "Anvedi o"},
	{id: "3",
	titolo: "Profilo AIUTO",
	descrizione: "Anvedi o"}
]	

 // fungione che gestisce bottone avanti
 
var immagine = 1;
function Avanti() {
	immagine++;
	if (immagine > 8)
		immagine = 1;
	document.getElementById("Slider").src = "./images/Galleria/photo_" + immagine + ".jpg";
	showDescription(immagine);

}
// funzione che gestisce bottone indietro

var immagine;
function Indietro() {
	immagine--;
	if (immagine < 1)
		immagine = 8;
	document.getElementById("Slider").src = "./images/Galleria/photo_" + immagine + ".jpg";
	showDescription(immagine);
}

function showDescription(img){
	images = document.getElementsByClassName("descPhoto");
	for(i=0;i<images.length;i++)
	{
		images[i].classList.add("hide");
	}
	document.getElementById("foto"+img).classList.remove("hide");
	
	console.log(images);
}

