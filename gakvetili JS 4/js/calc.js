function gamotvla(){
    //sheqmenit 3 cvladi, num1, num2 da op; +
    //am cvladebSi gilakze daklikebis dros sheinaxet informacia input-dan +
    //gadaamowmet gilaakze "gamotvla" daklikebis dros console.log-shi tu gmoitans cvladebi swor informacias, is rac input-shi iyo chawerili +

    //cvladi op sheamowmet if-else metodit da shesabamisi moqmedebit ricxvebi shekribet, gamoakelit, gaamravlet an gayavit ertmanetze

    //pasuxis dasamaxsovreblad dagchirdebat cvladi - pasuxi

    //es pasuxi unda gamoitanot span#answer-shi

    let num1 = parseInt(document.getElementById("number1").value); //string
    let num2 = parseInt(document.getElementById("number2").value); //string
    let op = document.getElementById("operator").value; //string
    let pasuxi;
    console.log(num1, num2, op);
    
    if(op == "+"){
       pasuxi = num1 + num2;
    }
    else if(op == "-"){
        pasuxi = num1 - num2;
    }
    else if(op == "/" || op == ":"){
        pasuxi = num1 / num2;
    }
    else if(op == "*" || op == "." || op == "x"){
        pasuxi = num1 * num2;
    }
    else window.alert("Invalid Operator!");

    document.getElementById("answer").innerHTML = pasuxi;
}