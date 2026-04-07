let vashli = "vashli", msxali = "msxali", marwyvi = "marwyvi", banani = "bbanani", gargari = "gargari";

// array - მასივი
// mასივის სიგრძე - array length
let xili = ["vashli", "msxali", "marwyvi", "banani", "gargari", "bali"];
 //5
//             0          1         2          3        4
console.log(xili);
console.log(xili[1]);
console.log(xili.length); // 6

//5 - 4
//6 - 5

console.log(xili.length-1); // 5

xili[6] = "atami";
console.log(xili);


console.log(
    xili[xili.length-1]
);



// array - string, number, objects, arrays, variables




// xili[9] = "gogra";
// console.log(xili);
// console.log(xili[7]);

xili.push("gogra");
xili.pop();
console.log(xili);

//for array

{

    let cars = ["fiat", "prius", "sym"];
    let carlist="";
    // <li>fiat.</li> + <li>prius.</li> + <li>sym.</li>
    for(i=0; i<cars.length; i++){
        // console.log(cars[i]);
        let li = document.createElement("li");
        li.textContent = cars[i];
        console.log(li);
        document.getElementById("manqanebi").appendChild(li);
    }




    



}


{
    let nav = ["home", "about", "gallery", "contact"];
    let navlinks = ["index.html", "#", "#", "contact.html"];

    //for
   //  let li = document.createElement("li");  - ar gaaketot pirvel jerze

   let ul = '<ul class="flex">';
   for(i=0; i <nav.length; i++){
        ul += `<li><a href="${navlinks[i]}">${nav[i]}</a></li>`;
        console.log(ul);
        
   }
   ul += "</ul>";

   console.log(ul);
   document.getElementById("nav").innerHTML = ul;
        
}

