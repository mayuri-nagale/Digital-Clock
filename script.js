function updateClock(){
let d = new Date();
let hr = d.getHours();
let ms = d.getMinutes();
let s = d.getSeconds();
let date = d.getDate(); 
let yr = d.getFullYear();

let week =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let year =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let day = week[d.getDay()];
let mon = year[d.getMonth()];

let hour = document.querySelector("#hours").innerHTML = hr;
let min = document.querySelector("#mins").innerHTML = ms;
let sec = document.querySelector("#secs").innerHTML = s;
let days = document.querySelector(".day").innerHTML = day;
let dates = document.querySelector("#date").innerHTML = date;
let month = document.querySelector("#month").innerHTML = mon;
let yearNo = document.querySelector("#year").innerHTML = yr
}

updateClock();
setInterval(updateClock, 1000)