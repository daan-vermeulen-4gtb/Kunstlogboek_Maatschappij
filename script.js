let btn = document.getElementById("endBtn");
let end = document.getElementById("endScreen");
let time = document.getElementById("time");

let minutes = 0;

setInterval(()=>{
minutes++;
time.innerHTML = minutes;
},4000);

btn.onclick = ()=>{
end.style.opacity = 1;
end.style.pointerEvents = "all";
};