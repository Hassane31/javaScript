let hello =  setTimeout(function(){
    console.log('hello')
},3000)//3 sec

//if u want to stop
clearTimeout(hello);

//--------------------------
let i = 0;
let hello2 = setInterval(function(){
    console.log(i++)
    if (i == 10 ){clearInterval(hello2)}
},1000);

//if u want to stop it 
//clearInterval(hello2)
 
