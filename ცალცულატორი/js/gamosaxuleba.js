let createGamosaxuleba = (button) => {

    let gamosaxuleba = document.getElementById("gamosaxuleba").innerHTML;

    if(gamosaxuleba.length < 30){
        console.log(button.innerHTML);

        gamosaxuleba += button.innerHTML;

        document.getElementById("gamosaxuleba").innerHTML = gamosaxuleba;
    }
}

let buttons = document.getElementsByClassName("actionbtn");

//console.log(buttons);


for(i=0; i<buttons.length; i++){
    // console.log(buttons[i].innerHTML);

    buttons[i].addEventListener("click", function(){
        createGamosaxuleba(this);
    });
   
}












// let buttons = ["plus", "minus", "gamravleba", "gayofa"];

// buttons.forEach(button => {
//     console.log(button);
// });



