let mode = () => {
    let iconmode = document.getElementById("mode").innerHTML;
    console.log(iconmode);
    if(iconmode.includes("on")){
        document.body.style.setProperty("--textcolor", "#000000");
        document.body.style.setProperty("--bgcolor1darkblue", "#6DD5FA");
        document.body.style.setProperty("--bgcolor2lightblue", "#FFFFFF");
        document.body.style.setProperty("--generalbgcolor", "rgba(0, 0, 0, 0.3)");
        document.getElementById("mode").innerHTML = '<i class="fa-solid fa-toggle-off"></i>';
    }
    else{
        document.body.style.setProperty("--textcolor", "#FFFFFF");
        document.body.style.setProperty("--bgcolor1darkblue", "#004680");
        document.body.style.setProperty("--bgcolor2lightblue", "#4484BA");
        document.body.style.setProperty("--generalbgcolor", "rgba(217, 217, 217, 0.3)");
         document.getElementById("mode").innerHTML = '<i class="fa-solid fa-toggle-on"></i>';
    }
    
}
document.getElementById("mode").addEventListener(
    "click", mode
)