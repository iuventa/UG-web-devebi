let roll=()=>{

    let randomNumber1 = Math.floor(Math.random()*6) + 1;
    let randomNumber2 = Math.floor(Math.random()*6) + 1;
    // 0 1 2 3 4 5
    console.log(randomNumber1, randomNumber2);
    
    
    document.getElementById("image1").src = `assets/img/dice${randomNumber1}.png`;
    document.getElementById("image2").src = `assets/img/dice${randomNumber2}.png`;

    if(randomNumber1 > randomNumber2){
        document.getElementById("answer").innerHTML = "🚩The winner is N1";
    }
    else if(randomNumber1 < randomNumber2){
        document.getElementById("answer").innerHTML = "The winner is N2 🚩";
    }
    else{
        document.getElementById("answer").innerHTML = "Draw";
    }
   
    
}
document.getElementById("button").addEventListener("click",roll);