let buttonColor=["red", "blue", "green", "yellow"];
let gamePattern=[];
let userClicked=[];
let started=false;
let level=0;

// let music_blue=new Audio("sounds/blue.mp3");
// let music_red=new Audio("sounds/red.mp3");
// let music_green=new Audio("sounds/green.mp3");
// let music_yellow=new Audio("sounds/yellow.mp3");
// let music_wrong=new Audio("sounds/wrong.mp3");

// function musicPLay(color){
//     let fileName = `sounds/music_${color}.mp3`;
//     fileName.play();
// }


$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level "+level);
        nextSequence();
        started=true;
    }
});

$(".btn").click(function(){
    let userChosenColor=$(this).attr('id');
    userClicked.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClicked.length-1);
});

function checkAnswer(currentlevel){
    if(gamePattern[currentlevel]===userClicked[currentlevel]){
        if(gamePattern.length==userClicked.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }

    else{
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over! Press any key to restart");
        
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);


        startOver();
    }
}

function nextSequence(){
    userClicked=[];
    level++;
    $("level-title").text("level: "+level);
    let numb=Math.floor(Math.random()*4);
    let randomColor=buttonColor[numb];
    gamePattern.push(randomColor);
    $('#'+randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomColor);
}


function animatePress(key){
    $("#"+key).addClass("pressed");
    setTimeout(()=>{$("#"+key).removeClass("pressed");},100);

    
}


function startOver(){
  level=0;
  gamePattern=[];
  started=false;
//   $("h1").text("level "+level);
}





function playSound(name){
    let music=new Audio("sounds/"+name+".mp3");
    music.play();
}



// nextSequence();
