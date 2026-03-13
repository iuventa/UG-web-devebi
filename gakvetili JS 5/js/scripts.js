// მანქანა მიდის თბილისიდან სხვადასხვა ქალაქში
// ქალაქებში ჩასასვლელად სჭირდება გარკვეული რაოდენობა საწვავის
// თბილისი - გორი - 10 ლიტრი
// თბილისი - ხაშური - 15 ლიტრი
// თბილისი - ქუთაისი - 25 ლიტრი
// თბილისი - ბათუმი - 40 ლიტრი

// შექმენით ამოცანის გადაწყვეტა ვიზუალურად, ისე, რომ როდესაც ოპერატორი მიუთითებს საწვავის რაოდენობას და დააწვება "დადასტურება"-ის ღიკალს, მანქანა, რომელიც თბილისში დგას გადაგორდეს შესაბამის ქალაქთან. შესაბამისი ქალაქის ტრაფარეტზე გაჩნდეს მონიშვნა (თქვენი გემოვნებით)

// function fuel(){

// }

//arrow function

let fuel = () => {
    let fuelamount = document.getElementById("amount").value;
    console.log(fuelamount);

    if(fuelamount < 10){
        window.alert("ჩაამატეთ საწვავი. ან დარჩით თბილისში");
    }
    else if(fuelamount < 15 && fuelamount >= 10){
        document.getElementById("gori").style.backgroundColor = "#00c20a";
        document.getElementById("car").style.left = "450px";
    }
    else if(fuelamount < 25 && fuelamount >= 15){
        document.getElementById("khashuri").style.backgroundColor = "#00c20a";
        document.getElementById("car").style.left = "900px";
    }
    else if(fuelamount < 40 && fuelamount >= 25){
        document.getElementById("kutaisi").style.backgroundColor = "#00c20a";
        document.getElementById("car").style.left = "1300px";
    }
    else {
        document.getElementById("batumi").style.backgroundColor = "#00c20a";
        document.getElementById("car").style.left = "1650px";
    }
}
