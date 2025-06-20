let player1=Math.floor(Math.random()*6)+1;
let player2=Math.floor(Math.random()*6)+1;

document.getElementById("dice1").src=`./images/dice${player1}.png`;
document.getElementById("dice2").src=`./images/dice${player2}.png`;

let result=document.getElementById("result");

if(player1>player2){
    result.textContent="Player 1 wins!";
}
else if(player2>player1){
    result.textContent="Player 2 wins!";
}
else{
    result.textContent="It's a Draw!";
}
