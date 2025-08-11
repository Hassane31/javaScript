if(localStorage.length>0){
    document.body.style.background = localStorage.getItem('color');
}
    function setcolor (color){
    localStorage.setItem('color',color);
document.body.style.background = color;
}

