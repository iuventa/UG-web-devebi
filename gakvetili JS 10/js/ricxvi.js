let computernumber = parseInt(Math.random()*10);

let guessthenumber = () => {
    let mynumber = document.getElementById("number").value;

    console.log(mynumber, computernumber);
    
    //if
    //p-shi text-is gamotana
}

document.getElementById("check").addEventListener(
    "click", guessthenumber
);