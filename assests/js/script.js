
const key = "ccb2c16eac97b4ec82818dee69aa8718";

let city = document.querySelector("#city")
let form = document.querySelector("#form");
let recherche = document.querySelector("#recherche");
let show = document.querySelector(".show");

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

function afficherData(data){
    console.log(data);
    show.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
                    <br>${Math.floor((data.main.temp - (273.15)))}°C
                    <br>${data.weather[0].main}
                    <br>${data.weather[0].description}
                    `;

}