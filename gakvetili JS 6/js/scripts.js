

console.log(5<8);
// || - ან or
// && - და and
if(5>8 || 5>3){
    console.log("cheshmaritia"); 
}
else{
    console.log("araa cheshmariti da shesrulda else");
    
}


function nateba(){

    let feri = document.getElementById("color").value;
    console.log(feri);
    
    if(feri == "წითელი" || feri == "red" || feri == "witeli" || feri == "tsiteli" || feri == "citeli"){
        document.getElementById("red").style.backgroundColor = "#FF0000";
    }
    else if(feri == "yviteli" || feri == "ყვითელი" || feri == "kviteli"){
        document.getElementById("red").style.backgroundColor = "#fff200";
    
    }
    else if(feri == "mwvane" || feri == "მწვანე" || feri == "mtsvane"){
        document.getElementById("red").style.backgroundColor = "#00c903";
    }
    else{
        window.alert("უკაცრავად. თქვენ ვერ არჩევთ ფერთა სახელებს. სცადეთ თავიდან.")
    }
}


// switch(){
//     case "":
//         //ra unda moxdes
//         break;
//     case "":
//         //ra unda moxdes
//         break;
//     default: //ra unda moxdes
// }