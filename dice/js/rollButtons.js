const image1= document.getElementById("image1");
const image2 = document.getElementById("image2");
const answer = document.getElementById("answer");
let number1 = 0, number2 = 0;

document.getElementById("roll").addEventListener("click", function(){
    number1 = Math.floor(Math.random()*6) + 1;
    image1.src = `assets/img/dice${number1}.png`;
    
    guessTheWinner();
})

document.getElementById("roll2").addEventListener("click", function(){
    number2 = Math.floor(Math.random()*6) + 1;
    image2.src = `assets/img/dice${number1}.png`;

    guessTheWinner();
})

function guessTheWinner(){
    if(number1 > 0 && number2 > 0){
        if(number1 > number2){
            answer.innerHTML = "🚩 The Winner is Player N1";
        }
        else if(number1 < number2){
            answer.innerHTML = "The Winner is Player N2 🚩";
        }
        else{
            answer.innerHTML = "MATCH";
        }
    }
}