//window.scroll(200,250) write in console
//window.scrollBy(100,100) add to the last position
//scrollY or scrollX show the coordinates
let btn = document.getElementById('button');

window.onscroll = function (){
    if(scrollY >= 400){
        btn.style.display = 'block';
    }
    else btn.style.display = 'none';
}
btn.onclick = function (){
    scroll({
        left : 0 ,
        top : 0 ,
        behavior : 'smooth',
    })
}