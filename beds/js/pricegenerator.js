let add70 = (span) => {
    //ავიღოთ საწყისი ფასი და გადავაქციოთ რიცხვად
    let price = parseInt(document.getElementById("littlebedprice").innerHTML);

    console.log(price);

    price += 70;

    document.getElementById("littlebedprice").innerHTML = price;

    console.log(span.parentNode);

    span.parentNode.style.border = "1px solid #000000";


    //document.getElementById("littlebedprice").getAttribute

    let clickedvalue = parseInt(span.getAttribute("clicked"));
    console.log(clickedvalue);
    
    clickedvalue += 1;

    span.setAttribute("clicked", clickedvalue);

    if(clickedvalue == 2){
        span.disabled = true;
    }
}


let minus70 = (span) => {

    let clickeditem = parseInt(document.getElementById("add70").getAttribute("clicked"));

    if(clickeditem == 1){
         //ავიღოთ საწყისი ფასი და გადავაქციოთ რიცხვად
    let price = parseInt(document.getElementById("littlebedprice").innerHTML);

    console.log(price);

    price -= 70;

    document.getElementById("littlebedprice").innerHTML = price;

    console.log(span.parentNode);

    span.parentNode.style.border = "1px solid #c2bda3";


    //document.getElementById("littlebedprice").getAttribute

    let clickedvalue = parseInt(document.getElementById("add70").getAttribute("clicked"));
    // console.log(clickedvalue);
    
    clickedvalue -= 1;

    // span.setAttribute("clicked", clickedvalue);

    // if(clickedvalue == 2){
    //     span.disabled = true;
    // }



    document.getElementById("add70").setAttribute("clicked", clickedvalue);
     }
   
}