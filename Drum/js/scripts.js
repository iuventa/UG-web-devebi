let animals = document.querySelectorAll(".animal");

for(let i = 0; i < animals.length; i++){
    console.log(animals[i]);
    animals[i].addEventListener("click", function(){
        alert("damaklikes");
    })
}
