// თუ რიცხვი იყოფა 4-ზე
// და არ იყოფა 100-ზე -  ჩვეულებრივი
// და იყოფა 400-ზე

//ნაკიანი წელიწადი

let leapYear = () => {
    // console.log("test");
    let userYear = parseInt(document.getElementById("year").value);

    let pasuxi;
    if( userYear%4 == 0 ){
        if(userYear%100 == 0){
            if( userYear%400 != 0 ){
                pasuxi = "ჩვეულებრივია";
            }
            else{
                pasuxi = "ნაკიანია";
            }
        }
        
    }
    document.getElementById("pasuxi").innerHTML = pasuxi;

}

document.getElementById("leapBtn").addEventListener("click", leapYear);