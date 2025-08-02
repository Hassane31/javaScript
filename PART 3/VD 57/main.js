let doller = document.getElementById('doller');
let dinar = document.getElementById('dinar');
doller.onkeyup = function (){
   
    dinar.value = doller.value*254;
}
dinar.onkeyup = function (){

    doller.value = dinar.value / 254;
}