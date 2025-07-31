function hello (){
    console.log('hello world')
}
let btn = document.getElementById('button');
/*
btn.onclick = function(){
   document.body.style.background = 'red';
}
*/ //same same
//dont work in many functions 
function hello2(){
   document.body.style.background = 'red';
}
btn.onclick = hello2 ;

//work in all (more intelligent then before)
let btn2 = document.getElementById('button2');
btn2.addEventListener('click',hello2);


