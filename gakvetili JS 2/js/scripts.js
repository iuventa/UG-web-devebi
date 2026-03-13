console.log("hi");
document.getElementById("misalmeba").innerHTML = "hi";
//window.alert("please, accept the cookies");
//document.write("test me");

//window.prompt("გთხოვთ, მიუთითოთ თქვენი ასაკი");

// var let const

var firstname = "სალომე";
console.log(firstname);

//scope

{
    let test = "success";
    console.log(test);

    test = "error";
    console.log(test);
    
}

//console.log(test);

{
    const password = 123456;
   // akrdzalulia  pi = 4.15;
}

{
    let a = 5, b = "7", c;
    c = a;
    c=b;
    console.log(a, b);
    console.log(typeof(a), typeof(b), typeof(c));
    
    //კონკატენაცია
    c = a + parseInt(b); 
    console.log(c);
    
}

{
    let a=2, b=5;

    a = a + b; // a = 7
    b = a + b; // b = 12

    a = b - a; // a = 12 - 7 a = 5

    //operator = + - / * **

    a = b / a; // a = 12 : 5 a = 2.4

    a = a * a; // a = 5.76

    b = b ** 2// b = 12 kcadratshi 124

    b = b % 5; // nashti 4
}

{
    let a = 2, b = 4;
    a += b; //es6    a = a + b;
    a += b; // a = b + a;
    // b = a + b;
    b += a;

    a = a - b; 
     b = b - a;
     c = c / d;
     a = a + a + b;
    a = a % c;
    c = c % b;
     s = s ** v;
}