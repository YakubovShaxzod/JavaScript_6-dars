/*Moth in JS*/

















/*

/!*LocalStorage(mahaliy ombor) in JS*!/

localStorage.setItem('ism','Olov');
localStorage.setItem('familiya','Sayfullayev');
localStorage.setItem('yoshi','14');

localStorage['ism'] = "Oloviddin";
localStorage['dfamiliya'] = "Sayffullayev";

/!*localStorage.removeItem('ism');*!/
localStorage.clear();


let uningismi = localStorage.getItem('ism');
let uningfamiliyasi = localStorage.getItem('familiya');
let uningyoshi = localStorage.getItem('yoshi')

console.log(uningismi,uningfamiliyasi,uningyoshi);
*/
/*https request in JS*/
/*
let sorov = new XMLHttpRequest();
sorov.open('get','https://getty.uz/serverdan/malumot/olish');
sorov.send();

sorov.onload = function (){
    console.log(sorov.responseText);

}*/
/*JSON in JS*/

/*let object = {ism: "Olov",yoshi: 14}; /!* => JS object file*!/

let json = '{"ism":Olov,"yoshi":14}'; /!* => JSon file*!/

console.log(JSON.parse(json));*/

let sorov = new XMLHttpRequest();
sorov.open('get','jsonFayl.json');
sorov.send();
sorov.onload = function (){
    console.log(JSON.stringify(sorov));

}