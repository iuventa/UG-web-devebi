let calculate = () => {
    let gamosaxuleba = document.getElementById("gamosaxuleba").innerHTML;


   

    let number1, number2, operator, sum;


    if(gamosaxuleba.includes("+")){

        operator = "+";
        number1 = parseFloat(gamosaxuleba.slice(0, gamosaxuleba.indexOf("+")));
        number2 = parseFloat(gamosaxuleba.slice(gamosaxuleba.indexOf("+")+1, gamosaxuleba.length));
        sum = number1 + number2;

    }
    else if(gamosaxuleba.includes("−")){

        operator = "−"; 
        number1 = parseFloat(gamosaxuleba.slice(0, gamosaxuleba.indexOf("−")));
        number2 = parseFloat(gamosaxuleba.slice(gamosaxuleba.indexOf("−")+1, gamosaxuleba.length));
        sum = number1 - number2;

    }
    else if(gamosaxuleba.includes("×")){

        operator = "×"; 
        number1 = parseFloat(gamosaxuleba.slice(0, gamosaxuleba.indexOf("×")));
        number2 = parseFloat(gamosaxuleba.slice(gamosaxuleba.indexOf("×")+1, gamosaxuleba.length));
        sum = number1 * number2;

    }

    else if(gamosaxuleba.includes("÷")){

        operator = "÷"; 
        number1 = parseFloat(gamosaxuleba.slice(0, gamosaxuleba.indexOf("÷")));
        number2 = parseFloat(gamosaxuleba.slice(gamosaxuleba.indexOf("÷")+1, gamosaxuleba.length));
        sum = number1 / number2;

    }

    else if(gamosaxuleba.includes("%")){

        operator = "%"; 
        number1 = parseFloat(gamosaxuleba.slice(0, gamosaxuleba.indexOf("%")));
        number2 = parseFloat(gamosaxuleba.slice(gamosaxuleba.indexOf("%")+1, gamosaxuleba.length));
        sum = (number1 * number2) / 100;

    }


    document.getElementById("answer").innerHTML = sum;


    //console.log(operator, number1, number2);
    console.log(sum);
    
}

document.getElementById("equals").addEventListener("click", calculate);

let ricxvi = "123+7998765";
//            0 1 2 3 4 5
console.log(ricxvi.indexOf("+"));
console.log(ricxvi.slice(0, ricxvi.indexOf("+")));
console.log(ricxvi.slice(ricxvi.indexOf("+")+1, ricxvi.length));


