var user1 = document.querySelector("#boxOne");
var user2 = document.querySelector("#boxTwo");
var user3 = document.querySelector("#boxThree");
var user4 = document.querySelector("#boxFour");
var user5 = document.querySelector("#boxFive");


user1.addEventListener("click", acction1);

function acction1() {
    var text1 = document.querySelector("#selctName");
    text1.innerHTML = "Juan Pérez Pérez";
}

user2.addEventListener("click", acction2);

function acction2() {
    var text2 = document.querySelector("#selctName");
    text2.innerHTML = "Perico Casanova";
}


user3.addEventListener("click", acction3);

function acction3() {
    var text3 = document.querySelector("#selctName");
    text3.innerHTML = "Miranda Undurraga";
}

user4.addEventListener("click", acction4);

function acction4() {
    var text4 = document.querySelector("#selctName");
    text4.innerHTML = "Paola Asenjo";
}

user5.addEventListener("click", acction5);

function acction5() {
    var text5 = document.querySelector("#selctName");
    text5.innerHTML = "Miriam Hernandez";