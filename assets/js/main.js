

function gestoreLoad() {

	try {
		nodoOpenMenu = document.getElementById("open");
		nodoOpenMenu.onclick = gestoreApriMenu;

		nodoCloseMenu = document.getElementById("close");
		nodoCloseMenu.onclick = gestoreChiudiMenu;


		nodoMenu = document.getElementById("menu");
		nodoLink = nodoMenu.getElementsByTagName("a");
		for (var i = 0; i < nodoLink.length; i++) {
			nodoLink[i].onclick = gestoreChiudiMenu;
		}

		Reset();


	} catch (e) {
		alert("gestoreLoad " + e);
	}
}
window.onload = gestoreLoad;

// funzione che apre il menu
function gestoreApriMenu() {
	try {
		nodoMenu.style.width = "250px";
	} catch (e) {
		alert("gestoreApriMenu " + e);
	}
}

// funzione che chiude il menu
function gestoreChiudiMenu() {
	try {
		nodoMenu.style.width = "0";
	} catch (e) {
		alert("gestoreChiudiMenu " + e);
	}
}


var PulsantiGioco = [
	{
		id: "Piuma",
		profilo: 1
	},
	{
		id: "Rosa",
		profilo: 1
	},
	{
		id: "Rossetto",
		profilo: 2
	},
	{
		id: "PistolaCarica",
		profilo: 3
	},
	{
		id: "Chiodi",
		profilo: 3
	},
	{
		id: "Miele",
		profilo: 2
	},
	{
		id: "Forbici",
		profilo: 3
	},

];

var Profili = [
	{ //Piuma...
		profilo: 1,
		img: "images/abra.jpg",
		titolo: "Profilo AIUTO",
		descrizione: "Anvedi o"
	},
	{
		profilo: 2,
		img: "images/abramovic.jpg",
		titolo: "Profilo AIUTO",
		descrizione: "Anvedi o"
	},
	{
		profilo: 3,
		img: "images/m.jpg",
		titolo: "Profilo AIUTO",
		descrizione: "Anvedi o"
	}
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

function showDescription(img) {
	images = document.getElementsByClassName("descPhoto");
	for (i = 0; i < images.length; i++) {
		images[i].classList.add("hide");
	}
	document.getElementById("foto" + img).classList.remove("hide");

	console.log(images);
}

var clickGioco = 0; //contatore di click del gioco
var selectedChoice = []; //array che mantiene gli elementi selezionati


function Gioco(ident) {
	if (document.getElementById(ident).classList.contains('active')) {
		document.getElementById(ident).classList.remove('active')
		clickGioco--;

		selectedChoice = arrayRemove(selectedChoice,ident); // rimuovo il paragrafo corrispondente

		console.log(selectedChoice);

		
	} else {
		clickGioco++;
		selectedChoice.push(
			PulsantiGioco.find(x => x.id === ident).profilo // aggiungo il numero del paragrafo corrispondente
		);
		
		console.log(selectedChoice);
	
		document.getElementById(ident).classList.add('active')
	}

	checkStatus(ident);
}

function Reset() {
	clickGioco = 0;
	selectedChoice = [];
	buttons = document.getElementsByClassName("Bottonesec4");
	
	for (i = 0; i < buttons.length; i++) {
		buttons[i].classList.remove('active');		
		buttons[i].style.cursor = "pointer";
		buttons[i].style.opacity = "1";
		buttons[i].style.display = "list-item";
	}
	document.getElementById("RESET").style.cursor = "not-allowed";
	document.getElementById("RESET").style.opacity = "0.6";

	resIMG = document.getElementById("resIMG");
	resH = document.getElementById("resH");
	resP = document.getElementById("resP");

	resIMG.src= "images/marina oro.jpg";
	resH.innerHTML = "Scelto per te!";
	resP.innerHTML = "Immagina di avere il corpo nudoooooooooooooooo di Marina Abramovic e seleziona tre oggetti";
}

function checkStatus(identi) {
	
	if (clickGioco == 3) {

		visualizzaRisultato();
		buttons = document.getElementsByClassName("Bottonesec4");
		for (i = 0; i < buttons.length; i++) {
			buttons[i].classList.remove('active');
			buttons[i].style.cursor = "not-allowed";
			buttons[i].style.opacity = "0.6";
			buttons[i].style.display = "none";
		}

		document.getElementById("RESET").style.cursor = "pointer";
		document.getElementById("RESET").style.opacity = "1";
	}
}


function arrayRemove(arr, value) { // Rimuove un elemento da un array. Utilizzato per declick del bottone.
 
   return arr.filter(x=> x!==PulsantiGioco.find(x => x.id === value).profilo);
}

function visualizzaRisultato(){

	var counts = [];
	for(i=0;i<Profili.length;i++){
	 counts[i]=0;
	}
			
	selectedChoice.forEach(function(x) { counts[x] = (counts[x] || 0)+1; }); //conto le scelte
	
	idProfiloScelto = 0;
	for (i = 0; i<counts.length;i++){
		if(counts[i] && counts[i]>counts[idProfiloScelto])
			{
				idProfiloScelto = i;
			}
	}

	ProfiloScelto =  Profili.find(x=>x.profilo===idProfiloScelto);
	
	
	resIMG = document.getElementById("resIMG");
	resH = document.getElementById("resH");
	resP = document.getElementById("resP");

	resIMG.src=ProfiloScelto.img;
	resH.innerHTML = ProfiloScelto.titolo;
	resP.innerHTML = ProfiloScelto.descrizione;


}




