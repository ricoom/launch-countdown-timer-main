
const day_card=document.getElementById('day_card');
const hours_card=document.getElementById('day_card');
const min_card=document.getElementById('min_card')
const sec_card=document.getElementById('min_card')




var x=setInterval(()=>{
let deadline = new Date("dec 31, 2023 15:37:25").getTime();

let now  = new Date().getTime();
let t = deadline - now;
let days = Math.floor(t/(1000*60*60*24));
let hours = Math.floor((t%(1000*60*60*24))/(1000*60*60));
let minutes = Math.floor((t%(1000*60*60))/(1000*60));
let seconds = Math.floor((t%(1000*60))/1000);

document.getElementById('sec_card').innerText=seconds;
document.getElementById('min_card').innerText=minutes;
document.getElementById('hours_card').innerText=hours;
document.getElementById('day_card').innerText=days;


},1000)