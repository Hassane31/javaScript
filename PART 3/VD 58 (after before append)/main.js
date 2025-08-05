let after = document.getElementById('after');
let before = document.getElementById('before');
let append = document.getElementById('append');
let contant = document.getElementById('contant');
let container = document.getElementById('container');


container.style.backgroundColor = '#ffa';
container.style.height = '50px';



after.onclick = function (){
    container.after(contant)
}
before.onclick = function (){
    container.before(contant)
}
append.onclick = function (){
    container.append(contant)
}