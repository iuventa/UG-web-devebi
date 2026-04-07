let changemode = () => {
    
   let icon = document.getElementById('toggleicon').innerHTML;
   console.log(icon);

   //  <i class="fa-solid fa-toggle-off" aria-hidden="true"></i>

   if(icon.includes("fa-toggle-off")){
        document.getElementById("toggleicon").innerHTML = '<i class="fa-solid fa-toggle-on"></i>';
        //mivakitxo css-is cvlads da shevucvalo mnishvenolba
   }
   else{
        document.getElementById("toggleicon").innerHTML = '<i class="fa-solid fa-toggle-off"></i>';
   }
   
}

document.getElementById("toggleicon").addEventListener(
    "click", 
    changemode
);



