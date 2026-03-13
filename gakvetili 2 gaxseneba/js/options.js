let zindex = 4;

function showgeorgian(){
    document.getElementById("georgian").style.display = "block";
    zindex++;
    console.log(zindex);
    
    document.getElementById("georgian").style.zIndex = zindex;
    zindex = 4;
    console.log(zindex);
    
    // document.getElementById("osetian").style.display = "none";
    // document.getElementById("kazbeguri").style.display = "none";
    //  document.getElementById("mtiuluri").style.display = "none";   
} 
function showosetian(){
    document.getElementById("osetian").style.display = "block";
    zindex++;
    console.log(zindex);

    document.getElementById("osetian").style.zIndex = zindex;
    zindex = 4;
    console.log(zindex);


    // document.getElementById("kazbeguri").style.display = "none";
    // document.getElementById("georgian").style.display = "none";
    //  document.getElementById("mtiuluri").style.display = "none";
}
function showkazbeguri(){
    document.getElementById("kazbeguri").style.display = "block";
    zindex++;
    console.log(zindex);

    document.getElementById("kazbeguri").style.zIndex = zindex;
    zindex = 4;
    console.log(zindex);


    // document.getElementById("osetian").style.display = "none";
    // document.getElementById("georgian").style.display = "none";
    //  document.getElementById("mtiuluri").style.display = "none";
}
function showmtiuluri(){
    document.getElementById("mtiuluri").style.display = "block";
    zindex++;
    console.log(zindex);

    document.getElementById("mtiuluri").style.zIndex = zindex;
    zindex = 4;
    console.log(zindex);


    // document.getElementById("kazbeguri").style.display = "none";
    // document.getElementById("osetian").style.display = "none";
    // document.getElementById("georgian").style.display = "none";
}

