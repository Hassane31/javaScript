let btnopen = document.getElementById('open');
let btnclose = document.getElementById('close');
let container = document.querySelector('.container');


btnclose.onclick = function (){
    container.classList.add('hide');
    btnclose.classList.add('hide');
    btnopen.classList.remove('hide');
}
btnopen.onclick = function (){
    this.classList.add('hide');
btnclose.classList.remove('hide');
container.classList.remove('hide');
}