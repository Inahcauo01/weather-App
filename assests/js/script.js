
const key = "ccb2c16eac97b4ec82818dee69aa8718";

let city = document.querySelector("#city")
let form = document.querySelector("#form");
let recherche = document.querySelector("#recherche");

const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ccb2c16eac97b4ec82818dee69aa8718`;

recherche.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(city.value);
})

async function getWeather(city){
    const rep = await fetch(url(city)); //,{ origin: "cors"} est optionnel c'est juste pour la securité
    const repData = await rep.json();
    // console.log(repData);
    afficherData(repData);
}

afficherData(repData){
    
}