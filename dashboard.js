let items = document.querySelectorAll('.slider .items');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 0;
function loadShow(){
    let stt = 0;
    items[active].style.transform = 'none';
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    for (let i= active + 1; i<items.length; i++){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
         items[i].style.zIndex = -stt;
         items[i].style.filter = 'blur(5px)';
         items[i].style.opacity = stt > 2 ? 0 : 0.6;

    }
    stt = 0;
    for(let i = active - 1; i >= 0; i--){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;

    }
}
loadShow();
next.onclick = function(){
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}
prev.onclick = function(){
    active = active - 1 >= 0? active - 1 : active;
    loadShow();
}

 let statment = document.getElementById('statment').onclick = function() {
    window.location.href = 'statments.html';
}
let view = document.getElementById('view').onclick = function() {
    const correctpin = "1234";
    const userPin = prompt("Enter your PIN to view credit details:");

    if (userPin === correctpin ) {
        alert("Successfully ");
        location.href = "credit.html";
    } else  {
        alert("enter a valid pin");
    } 
}
let view1 = document.getElementById('view1').onclick = function() {
    const correctpin = "4321";
    const userPin = prompt("Enter your PIN to view credit details:");

    if (userPin === correctpin ) {
        alert("Successfully ");
        location.href = "acctdetails.html";
    } else  {
        alert("enter a valid pin");
    } 
}
let view2 = document.getElementById('view2').onclick = function() {
    const correctpin = "3214";
    const userPin = prompt("Enter your PIN to view credit details:");

    if (userPin === correctpin ) {
        alert("Successfully ");
        location.href = "viewbal.html";
    } else  {
        alert("enter a valid pin");
    } 
}



     
    let back = document.getElementById('back').onclick = function() {
        window.location.href = 'login.html';
   }  
