let btn = document.getElementById('btn');
 
btn.onmouseup = function (){
    console.log('why u click !!');
}

let btn2 = document.getElementById('btn2');
btn2.onmouseover =function (){
    console.log('on mouse over!!');
}

let btn3 = document.getElementById('btn3');
let i = 0;
btn3.onmousemove = function (){
    console.log('on mouse move '+i++)

}
//keybord event

let input = document.getElementById('input');
input.onkeyup = function (){
    console.log('on key up ')
}
let input2 = document.getElementById('input2');
input2.onkeydown = function (){
    console.log('on key down ')
}
let input3 = document.getElementById('input3');
input3.onfocus = function (){
   input3.style.border = '5px solid red';
}

input3.onblur = function (){
   input3.style.border = 'none';
}

onload = function(){//refrech
   // this.document.body.style.background = 'black';
}
onresize = function(){//when u change size of window
    this.document.body.style.background = 'black';
}