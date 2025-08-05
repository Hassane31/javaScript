let hello = document.getElementById('hello');
//add
hello.onclick = function (){
    hello.classList.add("name")
}
//right click
hello.oncontextmenu = function (){
    hello.classList.remove("name")
}
//we can replace all that with toggle 
hello.onclick = function (){
    hello.classList.toggle("name")
}