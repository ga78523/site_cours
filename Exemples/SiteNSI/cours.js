document.getElementById('p1').innerHTML =
    'Taille de la fenêtre (ext) : ' + window.outerWidth + '*' + window.outerHeight;

document.getElementById('p2').innerHTML = 
    'Taille de la fenêtre (int) : ' + window.innerWidth + '*' + window.innerHeight;

let b1 = document.getElementById('b1'); //On accède au bouton #b1
let winSize = 'width=500, height=500';

/*Nous verrons addEventListener() plus tard dans ce cours. Ici, on l'utilise pour
 *exécuter openWindow() dès qu'un utilisateur clique sur #b1*/
b1.addEventListener('click', openWindow);

//On définit notre fonction openWindow()
function openWindow(){
    //On recupère l'information renvoyée par open() dans une variable "fenetre"
    fenetre = window.open('https://www.codepen.io', '', winSize);
}
