let backspace = () => {
    //wamoiget gamosauxuleba
    let gamosaxuleba = document.getElementById("gamosaxuleba").innerHTML;
    console.log(gamosaxuleba);
    

    gamosaxuleba = gamosaxuleba.slice(0, gamosaxuleba.length -1);
    //waushalet gamosaxulebas bolo ricxvi
     

    document.getElementById("gamosaxuleba").innerHTML = gamosaxuleba;
}

document.getElementById("clearLastCharachter").addEventListener("click", backspace);