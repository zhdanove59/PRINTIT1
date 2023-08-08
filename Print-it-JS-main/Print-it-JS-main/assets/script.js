const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const flecheSuivant=document.querySelector("#suivant")
flecheSuivant.addEventListener("click" , changeSlide)
let numero = 0;
function changeSlide() {
	console.log("droit")
	numero = numero + 1 ;
	if ( numero >3)
	numero = 0
	//if (numero <0)
	//numero = 3
document.getElementById("slide").src= "./assets/images/slideshow/" + slides[numero].image;
dotSelected();  //function
document.getElementsByClassName("dot")[numero].classList.add("active");

}
const flechePrecedent=document.querySelector("#precedent")
flechePrecedent.addEventListener("click" , changeSlidePrecedent )
function changeSlidePrecedent() {
	console.log("gauche")
	numero = numero - 1 ;
	if ( numero >3)
	numero = 0
	if (numero <0)
	numero = 3
document.getElementById("slide").src= "./assets/images/slideshow/" + slides[numero].image;
dotSelected();
document.getElementsByClassName("dot")[numero].className="dot active";
}
const dots=document.querySelectorAll(".dot")  // dot c'est tableau
function dotSelected(){
	dots.forEach(element=>
		element.classList.remove("active"))
		

} 




