// console.log(navigator);
const longitude = document.getElementById('Longitude');
const latitude = document.getElementById('Latitude');
let timer;

function GeoLoc(){
  navigator.geolocation.getCurrentPosition((data) =>{
    console.log(data);
    timer = setInterval(() => {
    ShowPosition(data);
  },1000);
  } );
}

function ShowPosition(position){
    console.log("Latitude : "+ position.coords.latitude.toFixed(5) + "\nlongitude :"+ position.coords.longitude.toFixed(5));

    latitude.innerText = " ";
    latitude.innerText = position.coords.latitude;

    longitude.innerText = " ";
    longitude.innerText = position.coords.longitude;
}

function stop(){
    clearInterval(timer);
}
