function startgame(){
    let number1 = Math.floor(Math.random() * 6) + 1;
    let number2 = Math.floor(Math.random() * 6) + 1;
    // Math.random() * 6     0.5 - 5.7
    //Math.floor(Math.random() * 6)  0 - 5
    // Math.floor(Math.random() * 6) + 1    1-6
    console.log(number1, number2);
    

    document.getElementById("image1").src = "assets/img/dice"+number1+".png";
    document.getElementById("image2").src = "assets/img/dice"+number2+".png";

    if(number1 > number2){
        document.getElementById("answer").innerHTML = "Player 1 is WINNER";
    }
    else if(number1 < number2){
        document.getElementById("answer").innerHTML = "Player 2 is WINNER";
    }
    else{
        document.getElementById("answer").innerHTML = "DRAW";
    }
}

document.getElementById("btn").addEventListener("click", startgame);