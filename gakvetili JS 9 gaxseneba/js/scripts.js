//let const var
//var - global
var x = "5"; // "5"   '5' string - sityva, text
var y = 5; // number

console.log(typeof(y));

//scope
{
    let username = "salome";
    console.log(username);
    
}
// console.log(username);

{
    let username = "jujuna";
    username = "jujuna7";
    console.log(username);
    
}

{
    const userbirthyear = 1996;
    // userbirthyear= 1997;
    console.log(userbirthyear);
    
}

{
    let a=5, b=6, c = 8;
    console.log(typeof(c));
    c = b; // number
    c = "sali"; //string
    console.log(a + b);

    c = a + b;

    a = 7;
    console.log(c);

    a = a + b; // a = 7 + 6
    console.log(a);
    

   a = a + b //  a+=b

   // c = d + c  c += d

   // c = c - d  c -= d

   // k = i * k  k*=i

   // p = p / 6   p /= 6

   // p = a - b

   // a = p + b + a a += p + b
}

{
    let a="9", b=7;
    console.log(a !== b);
    
   if(true){
    console.log("ჭეშმარიტია");
   }
   else{
    console.log("მცდარია");
    
   }



}

function ricxvisgamocnoba(){
    //gamovicnot ricxvi dadebitia uaryofitia tu nulis tolia

    //tu ricxvi naklebia nulze - uaryofiti
    // tu nulze metia - dadebitia
    // tu aqedan arc erti araa mashin nuli yofila

    // let a = window.prompt("chawere ricxvi");

    let a = document.getElementById("ricvi").value;
    if(a < 0){

        console.log(a, "uaryofitia");
        
    }
    else if(a > 0){
        console.log(a + "dadebitia");
        
    }
    else if(a == 0){
        console.log(a, "nuli yofila");
        
    }
    else{
        console.log("ricxvi ar chagiweriat, vis atyuebt?");
        
    }

}

{
    for(p = 7; p >= 2; p--){
        console.log(p);
    }


}

{
    let k=9;
    while(k < 15){
        console.log("i love u");
        k++;
    }
}
// int - mteli 1, 4, 6, 14, 999
// float - wiladebi 1.2, 4.5

 let ricxvi = parseInt(Math.random()*10);
    console.log(ricxvi);

function gamocnoba(){
   

   let chemiricxvi = parseInt(document.getElementById("ricvi").value) ;
    console.log(chemiricxvi);
    //chemiricxvi - string
    //ricxvi - number
    console.log(typeof(chemiricxvi), typeof(ricxvi));
    
    if(chemiricxvi === ricxvi){
        window.alert("yeeey, gamoicaniiiiiiiiiii");
    }
}

