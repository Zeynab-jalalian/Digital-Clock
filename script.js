setInterval(function(){
    let clock=document.querySelector('.num');
let time=new Date();

let hr=time.getHours();
let min=time.getMinutes();
let sec=time.getSeconds();
let day='';

if(hr>12){
    hr=hr-12;
}
if(hr==0){
    h1=12;
}
if(sec<10){
    sec='0'+sec;
}
if(min<10){
    min='0'+min;
}
if(hr<10){
    hr='0'+hr;
}
clock.innerHTML=hr+" : "+min+" : "+sec+' '+day
})