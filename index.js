const cle = API_KEY;
let ville = "Paris";
recevoirTemperature(ville);
let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () => {
  ville = prompt('Quelle ville souhaitez-vous voir?');
  recevoirTemperature(ville);
})

function recevoirTemperature(){
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

