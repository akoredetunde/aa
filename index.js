// const countDownDate = new Date("Nov 29, 2022 12:11:12").getTime();
// let x = setInterval(function () {
//   let now = new Date().getTime();
//   let distance = countDownDate - now;
//   let days = Math.floor(distance / (1000*60*60*24));
//   let hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
//   let minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
//   let seconds = Math.floor((distance % (1000 * 60)) / 1000);
//
//   document.querySelector(".days").innerText = days;
//   document.querySelector(".hours").innerText = hours;
//   document.querySelector(".minutes").innerText = minutes;
//   document.querySelector(".seconds").innerText = seconds;
//
//   if(distance < 0){
//     clearInterval(x)
//     document.querySelector(".expired").innerText = "Expired";
//   };
//
// }, 1000);
//
// $(".oo").corner("bite bl br 5px");
// $(".ob").corner("bite tl tr 5px");

const option ={
    method: "GET",
    mode: "no-cors"
}

fetch("http://localhost:3000/projects/amos", option)
.then((response) => {
    response.json()
})
.then((data) => {
    console.log(data);
});
