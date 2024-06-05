let fruits= ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = "ORIGINAL: " + fruits;

//fruits.splice,0(2, "Lemon", "Kiwi");
//document.getElementById("demo2").innerHTML = "Lista 1: " + fruits;

let removed = fruits.splice(2, 2, "Lemon", "Kiwi");
document.getElementById("demo2").innerHTML = "Lista 2: " + fruits

document.getElementById("demo3").innerHTML = "Removidos" + removed