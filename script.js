setInterval(function(){
    let clock=document.querySelector('.num');
let time=new Date();

let hr=time.getHours();
let min=time.getMinutes();
let sec=time.getSeconds();
let day='';



clock.innerHTML=hr+" : "+min+" : "+sec+' '+day
})