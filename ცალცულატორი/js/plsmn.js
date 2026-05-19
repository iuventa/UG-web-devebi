let plsmn = () => {
    let gamosaxuleba = document.getElementById("gamosaxuleba").innerHTML;
    console.log(gamosaxuleba);
    let newGamosaxuleba;
    if(gamosaxuleba.includes("-")){
        newGamosaxuleba = gamosaxuleba.slice(1, gamosaxuleba.length);
    }
    else{
        newGamosaxuleba = "-"+gamosaxuleba;
    }

    document.getElementById("gamosaxuleba").innerHTML = newGamosaxuleba;
}

document.getElementById("plsmn").addEventListener("click", plsmn);