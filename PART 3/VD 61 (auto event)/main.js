let txt =document.getElementById('text');
let btn = document.getElementById('btn');

window.onload = function (){
    txt.focus();
   //exempls 
   // txt.value = 'ana hhha '
   // txt.placeholder = 'wayyyyyyy'
}
txt.oncontextmenu = function (){
   txt.blur();
}
btn.onclick = function (){
    btn.style.background = '#ffa';
}