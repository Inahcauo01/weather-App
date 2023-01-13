
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
    try {
        const rep = await fetch(url(city)); //,{ origin: "cors"} est optionnel c'est juste pour la securité
        const repData = await rep.json();
        afficherData(repData);
    } catch (error) {
        alert("Ville inexistante !")
    }
    
}

function afficherData(data){
    console.log(data);
    show.innerHTML = `<div class="top">
                    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" class="imgeWeather">
                    ${Math.floor((data.main.temp - (273.15)))}°C
                    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" class="imgeWeather">
                    </div>
                    <br>${data.weather[0].main}
                    <br>${data.weather[0].description}
                    <br>Sunrize : ${toHour(data.sys.sunrise)}
                    <br>Sunset  : ${toHour(data.sys.sunset)}
                    `;

}

function toHour(timestamp){
    let date = new Date(timestamp * 1000);
    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    return hours + ':' + minutes;
}
