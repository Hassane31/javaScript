let name = "hassane ";
let age = 21;
console.log(`my name is ${name} and my age is ${age}`)
//vd 8 ---------------------------------------------------------
let num1 = 5
let num2 = 4
console.log(num1 ** num2) //pow 
console.log(5 / 4)
num1 += 1
console.log(num1)
//vd 10 --------------------------------------------------------
console.log('4' - '3')
console.log(typeof Nan)
console.log(-'5')
console.log(+'5')
console.log(+true)
console.log(+false)
console.log(+null)
//vd 11 ---------------------------------------------------------
console.log(parseFloat('4.5'))
console.log(Number(4))
console.log(parseInt('4 hassabe'))
//vd 12 ---------------------------------------------------------
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.isSafeInteger(-9007199254740991))
console.log(Number.isInteger(44))
console.log(Number.isNaN('ahmad' - 5))
//vd 13 ---------------------------------------------------------
console.log(Math.E)
console.log(Math.PI)
console.log(Math.abs(-5))
console.log(Math.sqrt(4))
console.log(Math.round(10.2))
console.log(Math.max(1, 2, 4, 5, 6, 8, 9, 0))
//vd 14 ---------------------------------------------------------
let X;
// X = window.prompt() 
console.log(0.025 * X + 'DA')
//vd 15 ---------------------------------------------------------
let Y = 100
console.log(typeof Y)
console.log(typeof String(Y))
console.log(typeof Y.toString())
console.log(typeof 100..toString())
//vd 16 --------------------------------------------------------------
console.log(name.repeat(4))
console.log(name.length)
//----
console.log(name[0])//console.log(name[10]) -> undefinded
console.log(name.charAt(0))//console.log(name.charAt(10)) -> '  '
//----
console.log(name.indexOf('n', 4)) //start serch
console.log(name.lastIndexOf('n'))
console.log(name.slice(2, 5))
console.log(name.split('', 3))
//vd 17 --------------------------------------------------------------
let n = 'i love java script'
console.log(n.slice(2, 6))//accpet (-)
console.log(n.substring(2, 6))// can t accpt (-)
console.log(n.substr(2, 6))//look in th console
//vd 18 --------------------------------------------------------------
console.log(n.includes('a', 2))//if exist ->true
console.log(n.startsWith('love', 2))
console.log(n.endsWith('e', 6))
//vd 19 --------------------------------------------------------------
let names = ['ahmed', 'ali', 'somiya',]
console.log(names[names.length - 1])
let object = [1, 2, 3, [1, 2, 99]]
console.log(object[3][2])
//modify in arry 
names[3] = 'abderahmen'
//vd 20 --------------------------------------------------------------
names.push('jamel', 'taher')
names.unshift('wari')
console.log(names)
names.shift()
console.log(names)
console.log(names.shift())
names.pop()
console.log(names)
console.log(names.pop())
//vd 21 --------------------------------------------------------------
//delete from array part 2 
//splice (start,conut,add,add)
//slice (start , count -1)
names.splice(2, 1)
console.log(names)
names.splice(2, 0, 'mona', 'houcine')
console.log(names)
console.log(names.slice(0, 2))
//vd 22 --------------------------------------------------------------
console.log(names.indexOf('ahmed', 1/*start*/))
console.log(names.lastIndexOf('ahmed'))//reverse of indexOF
console.log(names.includes('ahmed'))//existing (return true/false)
//vd 23 --------------------------------------------------------------
let arr = ['ahmed', 'yacine', 'mhmd']
console.log(arr.reverse())
console.log(arr.sort())//alphabetizing
//vd 24 --------------------------------------------------------------
//concatination and join
let arr2 = ['youcef', 'mo3ad', 'adel']

/*arr+=arr2;
console.log(arr)*/

//right way
console.log(arr.concat(arr2))
console.log(arr.join('#'/*between*/))//type to string

//vd 25 --------------------------------------------------------------
/*
let askmail = prompt('enter your email')
let email = 'laabane@gmail.com'
console.log( askmail == email)
*/
let x = 'hassane'
console.log(x.toUpperCase())
console.log(x.toLowerCase())

//let askmail = prompt('enter your email')
let email = 'laabane@gmail.com'
//console.log( askmail.toLowerCase().trim() == email)
//trim -> delete spaces
//vd 26 --------------------------------------------------------------
// == -> values 
// === -> data type and values 
console.log(5 == '5')
console.log(5 === '5')

let product = 'TV'
let size = 50
let salary = 1000

console.log((salary >= 1000) && (size == 50))
//vd 27 --------------------------------------------------------------
let n1 = 7
let n2 = 6

if (n1 < n2) {
   console.log('num1<num2')
}
let role = 1 /*prompt('what is your role ?')
if (role == 'admin') {
   document.write('update , create , delete')
}
else if (role == 'moderator') {
   document.write('update ,create')
}
else {
   document.write('sorry u cant do any think# \n')
}*/
//vd 28 --------------------------------------------------------------
let result = 10/*prompt('what is your result ??')*/
if (result >= 16) { document.write('excellent !!') }
else if (result >= 12) { document.write('very good ') }
else if (result >= 10) { document.write('good') }
else { document.write('bed note') }
//vd 29 -------------------------------------------------------------- 
result >= 10 ? document.write(' result > 10  ') : document.write(' result < 10  ')
let ag = 18/*prompt ('whats ur age ??')*/
result = ag > 18 ? 'hello user'
   : ag == 18 ? 'u are 18 now'
      : 'u are younger'
console.log(result)
//vd 30 -------------------------------------------------------------- 
//switch
document.write('<br>')
let rol = 'user'/*prompt('what s ur role ??')*/
switch (rol) {
   case 'admin': document.write('you are admin');
      break;
   case 'moderator': document.write('u are moderator')
      break;
   case 'user': document.write('hello user');
      break;
   default: document.write('hello world !!');
}
//vd 31 -----------loop-----------------------------------------------
for (let i = 0; i <= 3; i++) {
   console.log('hello world ')
   console.log(i)
}
//vd 32 -----------loop-----------------------------------------------
let namess = ['hassane', 'houcine', 'ali', 'houssem']
let X1 = 'hassane'
for (let i = 0; i < namess.length; i++) {
   console.log(namess[i] + i)
}
for (let i = X1.length - 1; i >= 0; i--) {
   console.log(X1[i])
}
//vd 33 -----------loop-----------------------------------------------
let cars = ['BMW', 'Mercides', 'renult']
let modeles = ['2000', '1989', '2001']

for (let i = 0; i < cars.length; i++) {
   console.log(`CAR : ${cars[i]}`)
   for (let j = 0; j < modeles.length; j++) {
      console.log(`modele :'${modeles[j]}`)
   }
   console.log('_________________')
}
//vd 34 -------------------break/continue-------------------------------------------
let users = ['hassane', 'mohamed', 'yacine', 1, 2, 3, 4, 'khaled']

for (let i = 0; i < users.length; i++) {
   if (typeof users[i] == "number") {
      continue
   }
   console.log(users[i])
}
console.log('____________________')
for (let i = 0; i < users.length; i++) {
   if (users[i] == "yacine") {
      break
   }
   console.log(users[i])
}
//vd 35 --------------------------------------------------------------
let i = 0;
while (i < 3) {
   document.write('<h1>HELLO WORLD</h1>')
   i++;
}

do {
   document.write('<h1>DO WHILE 1 TIME</h1>')
   console.log("DO WHILE 1 TIME")
} while (false)
//vd 36 -------------function-----------------------------------------
function nameF(parameter) {
   console.log('hello ' + parameter)
}
nameF("hasssane");
//vd 37 -------------function/return---------------------------------
function pro(price, texes, ads) {
   let produc = price + texes;
   let result = produc + ads;
   return result;
}
let pr = pro(1000, 1.5, 10)
console.log(pr)
//vd 38 ---------------------------------------------------------------
//hoisting
//var X2
//hiya dirha w7dha (f var brq)

console.log('hello woorld !!')
var X2 = 10;
//console.log(X3) erreur
let X3;
//same thing in  functions ther is 2 type
//1 function declaration :(hoisting)
function hello() {
   return 1;
}
//2 function expretion
let hello1 = function () {
   return 1;
}
console.log(hello1)
console.log(hello1())
//vd 39 ---------------------------------------------------------------
//local 
for (let j = 0; j < 10; j++) {
}

//global 
for (var w = 0; w < 10; w++) {
}//w is globel now

(function () {
   console.log('function call')
})();


(function () {
   console.log('hello world !!')
   console.log('hello world !!')
   console.log('hello world !!')
   var XY = 1
   let YX = 2
   console.log('hello world !!')
})();
//XY and YX is local variables 

//what u see ----------------
/* console.log (     x()     )
function x(){
function y(){return 1}
return y();
function y(){return 0}
}
//what JS see --------------
function x(){
function y(){return 1}
function y(){return 0}
return y();
}
console.log (     x()     )*/
//vd 40 ---------------------------------------------------------------
function fonction(nn) {
   console.log(`hello ${nn}`)
}
fonction();

function CALC(ag) {
   console.log(ag * 365);
}
CALC();

function fonctionunlimmetedPram(...numbers) {
   let s = 0;
   for (let i = 0; i < numbers.length; i++) {
      s += numbers[i]
   }
   return s;
}
console.log(fonctionunlimmetedPram(1, 3, 4, 55, 2, 23232, 323, 23, 2))
//vd 41 ----------arrow function-----------------------------------------
let fn = () => 1;
console.log(fn())

let fn1 = _ => 1; //no parameter
let fn2 = nbr => nbr;//one parameter
console.log(fn2(22))

let fn3 = (n3, n4) => n3 * n4;//two parameter
console.log(fn3(2, 3))
//vd 42 -----what is object--------------------------------------------
let car = {
   nameCar: 'laguna',
   priceCar: 1270000,
   color: ['red', 'blue', 'black'],

   hello: function () { return 'hello' }
};
console.log(car.nameCar)
console.log(car.color[1])
console.log(car.hello())

//vd 43 -----nested object--------------------------------------------