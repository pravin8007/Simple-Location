// console.log(navigator);
const longitude = document.getElementById('Longitude');
const latitude = document.getElementById('Latitude');
let timer;

function GeoLoc(){
  navigator.geolocation.watchPosition((data) =>{
    console.log(data);
    ShowPosition(data)
  //   timer = setInterval(() => {
  //   // ShowPosition(data);
  // },1000);
  });
}

function ShowPosition(position){
    console.log("Latitude : "+ position.coords.latitude.toFixed(5) + "\nlongitude :"+ position.coords.longitude.toFixed(5));

    latitude.innerText = " ";
    latitude.innerText = position.coords.latitude;

    longitude.innerText = " ";
    longitude.innerText = position.coords.longitude;

  //   let latlon = position.coords.latitude + "," + position.coords.longitude;

  // let img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";

  // document.getElementById("mapholder").innerHTML = "<img src='${img_url}'>";
}

function stop(){
    clearInterval(timer);
}
