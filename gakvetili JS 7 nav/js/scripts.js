let shownav = () => 
{
    // console.log("mushaobs");
    
  

    if(document.getElementById("line1").style.width == "0px"){
        document.getElementById("ul").style.height = "0";
        document.getElementById("line1").style.width = "100%";

        document.getElementById("line2").style.transform = "rotate(0deg)";

        document.getElementById("line3").style.transform = "rotate(0deg)";
        document.getElementById("line3").style.marginTop = "0";
    }
    else{
        document.getElementById("ul").style.height = "400px";
        document.getElementById("line1").style.width = "0";
        
        
        document.getElementById("line2").style.transform = "rotate(45deg)";

        document.getElementById("line3").style.transform = "rotate(-45deg)";
        document.getElementById("line3").style.marginTop = "-18px";
    }
    
}

document.getElementById("burger").addEventListener
(   
    "click", 
    shownav
);