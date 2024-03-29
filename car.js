// let carAudio= new Audio('vroom.mp3');


// carAudio.play();

let carAudio=document.createElement('audio')
carAudio.setAttribute('src','vroom.mp3')
carAudio.loop=true; 

setTimeout(()=>{
    carAudio.play();
},1000)
