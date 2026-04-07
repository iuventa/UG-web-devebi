/*
  <li class="flex">
   <span>drink 99 bottle of beer</span>
   <div>
    <span class="done">✓</span>
    <span class="del">✕</span>
    </div>
   </li>
 

*/
let addtask = () => {
    let task = document.getElementById("task").value;

    let li = document.createElement("li");
    let spanfortext = document.createElement("span");
    let spanfordone = document.createElement("span");
    let spanfordelete = document.createElement("span");
    let div = document.createElement("div");

    spanfortext.textContent = task;

    spanfordone.textContent = "✓";
    spanfordone.classList.add("done");
    spanfordone.setAttribute("onclick", "done(this)");

    spanfordelete.textContent = "✕";
    spanfordelete.classList.add("del");
    spanfordelete.setAttribute("onclick", "del(this)");

    li.appendChild(spanfortext);
    li.classList.add("flex");

    div.appendChild(spanfordone);
    div.appendChild(spanfordelete);

    li.appendChild(div);

    document.getElementById("list").appendChild(li);

    document.getElementById("task").value = "";
    
}
document.getElementById("add").addEventListener(
    "click",
    addtask
);


// let sum = (a, b) => {
//     return ( a + b );
// }
// console.log(sum(4, 9));

let showinnertext = (a) => {
    console.log(a.innerHTML);
    
}

let done = (icondone) => {
    console.log(icondone.parentNode.parentNode);
    
    icondone.parentNode.parentNode.firstChild.style.textDecoration = "line-through";

    icondone.style.visibility = "hidden";
}

let del = (delicon) => {
    console.log(delicon.innerHTML); 
}