
localStorage.setItem('name','abdelrahman');
//localStorage.name = 'hassene'    

console.log(localStorage.getItem('name'))
//console.log(localStorage.name)
localStorage.age = JSON.stringify(26) ;
console.log( typeof JSON.parse(localStorage.age))//string

//localStorage.user = {
//    name : 'hassene',
//    age :25 ,}

    //dont understand object so switch it 

localStorage.user = JSON.stringify({
    name : 'hasse',
    age :26 ,})
console.log(typeof JSON.parse( localStorage.user))
console.log(JSON.parse(localStorage.getItem('user')))

console.log(localStorage.key(1))//index to show whats inside the storage
localStorage.removeItem('user')
localStorage.removeItem('age')
localStorage.removeItem('user2')
//localStorage.clear()

//session storage same like local S 
//seesion storage save in jast one tab
 let txt = document.getElementById('txt');

if(localStorage.length > 0){
    txt.value = localStorage.getItem('txt');
}
 txt.onkeyup = function(){
    localStorage.setItem('txt',txt.value)
 }