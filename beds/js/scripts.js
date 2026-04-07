document.getElementById("onesided").addEventListener("click", ()=>{
    document.getElementById("onesided").style.backgroundColor = "#c2bda3";

    document.getElementById("onesidedcontainer").style.display = "flex";

    document.getElementById("twosided").style.backgroundColor = "#c2bda300";

    document.getElementById("twosidedcontainer").style.display = "none";

      document.getElementById("twostoreyd").style.backgroundColor = "#c2bda300";

    document.getElementById("twostoreydcontainer").style.display = "none";

})

document.getElementById("twosided").addEventListener("click", ()=>{
    document.getElementById("twosided").style.backgroundColor = "#c2bda3";

    document.getElementById("twosidedcontainer").style.display = "flex";

     document.getElementById("onesided").style.backgroundColor = "#c2bda300";

    document.getElementById("onesidedcontainer").style.display = "none";

     document.getElementById("twostoreyd").style.backgroundColor = "#c2bda300";

    document.getElementById("twostoreydcontainer").style.display = "none";
})


document.getElementById("twostoreyd").addEventListener("click", ()=>{
    document.getElementById("twostoreyd").style.backgroundColor = "#c2bda3";

    document.getElementById("twostoreydcontainer").style.display = "flex";

     document.getElementById("onesided").style.backgroundColor = "#c2bda300";

    document.getElementById("onesidedcontainer").style.display = "none";

     document.getElementById("twosided").style.backgroundColor = "#c2bda300";

    document.getElementById("twosidedcontainer").style.display = "none";
})