// Récupération de la date courante
var now = new Date();
// Extraction des différents éléments 
var hours = now.getHours();
var minutes=now.getMinutes();
var secondes=now.getSeconds();
                                                 
 // Modification du contenu du paragraphe (p)
document.querySelector("p").textContent = hours +":"+minutes+":"+secondes;
