
let music_w=new Audio("sounds/tom-1.mp3");
let music_a=new Audio("sounds/tom-2.mp3");
let music_s=new Audio("sounds/tom-3.mp3");
let music_d=new Audio("sounds/tom-4.mp3");
let music_j=new Audio("sounds/crash.mp3");
let music_k=new Audio("sounds/kick-bass.mp3");
let music_l=new Audio("sounds/snare.mp3");

function stopAllMusic() {
    music_w.pause();
    music_w.currentTime=0;
    music_s.pause();
    music_s.currentTime=0;
    music_a.pause();
    music_a.currentTime=0;
    music_d.pause();
    music_d.currentTime=0;
    music_j.pause();
    music_j.currentTime=0;
    music_k.pause();
    music_k.currentTime=0;
    music_l.pause();
    music_l.currentTime=0;
}

function animate(key){
    let button=document.getElementById(key);
    button.classList.add("pressed");
    setTimeout(()=>{button.classList.remove("pressed");},100);
    
}
document.addEventListener("keydown",function(event){
    const key = event.key.toLowerCase();
    animate(key);
    if(key==='w'){
        stopAllMusic();
        music_w.play();
    }
    else if(key==='a'){
        stopAllMusic();
        music_a.play();
    }
    else if(key==='s'){
        stopAllMusic();
        music_s.play();
    }
    else if(key==='d'){
        stopAllMusic();
        music_d.play();
    }
    else if(key==='j'){
        stopAllMusic();
        music_j.play();
    }
    else if(key==='k'){
        stopAllMusic();
        music_k.play();
    }
    else if(key==='l'){
        stopAllMusic();
        music_l.play();
    }
});
