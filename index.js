const cle = API_KEY;
let ville = "Paris";
let villeChoisie;

if("geolocation" in navigator){
  //on vérifie que la géolocalisation est activée
  
  navigator.geolocation.watchPosition((position) => {
  //watchPosition pour récupérer la position de l'utilisateur et la mettre à jour régulièrement 
    
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
  //on récupère les coordonées de l'utilisateur
    
    let url = 'https://api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + lon + '&appid=' + cle + '&units=metric';    
  fetch(url)
  //appel api avec les coordonées    
    .then(result => {return result.json()})
    .then(result => {
      let temperature = result.main.temp;
      let ville = result.name;
      document.querySelector('#temperature_label').textContent = temperature;
      document.querySelector('#ville').textContent = ville;      
    })
    .catch(() => alert('erreur'))},erreur,options);      
}else{
  //si pas de géolocalisation on affiche la ville choisie
  villeChoisie = 'Paris';
  recevoirTemperature(villeChoisie);
}

//pour plus de précision
var options = {
  enableHighAccuracy: true
}

//Au cas où la géolocalisation n'est pas activée, affichage par défaut
function erreur(err){
  villeChoisie = 'Paris';
  recevoirTemperature(villeChoisie);
}

let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () => {
  villeChoisie = prompt('Quelle ville souhaitez-vous voir?');
  recevoirTemperature(villeChoisie);
})

function recevoirTemperature(ville){
const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ ville + '&appid='+ cle +'&units=metric';

fetch(url)
.then(result => {return result.json()})
.then(result => {
  let temperature = result.main.temp;
  let ville = result.name;
  document.querySelector('#temperature_label').textContent = temperature;
  document.querySelector('#ville').textContent = ville;
})
.catch(() => alert('erreur'))}



