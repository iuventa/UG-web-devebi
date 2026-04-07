let anteba = () => {
    document.getElementById("bulb").src = "assets/img/lightbulbon.png";
}

document.getElementById("anteba").addEventListener(
    "click",
    anteba
);

let chakroba = () => {
     document.getElementById("bulb").src = "assets/img/lightbulboff.png";
}

document.getElementById("chakroba").addEventListener(
    "click",
    chakroba
);



let jami = (a, b) => {
    return a+b;
}

console.log(jami(4, 8));

let sayhi = () => {
    console.log("hi");
    // return "hi";
}

// თუ src == assets/img/lightbulboff.png აინთოს
// ჩაქვრეს

let universal = () => {
    let  src = document.getElementById("bulb").src;
    console.log(src);

    //file:///C:/Users/Salita/OneDrive/Desktop/UG%20web%20devebi/gakvetili%20JS%206%20ciklebi/assets/img/lightbulboff.png

    //assets/img/lightbulboff.png
    
    if(src.includes("off")){
        //document.getElementById("bulb").src = "assets/img/lightbulbon.png";
        anteba();
    }
    else{
        //document.getElementById("bulb").src = "assets/img/lightbulboff.png";
        chakroba();
    }
}

document.getElementById("universal").addEventListener(
    "click",
    universal
);


