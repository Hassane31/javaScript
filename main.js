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
 for(let i=0;i<=3;i++){
   console.log('hello world ')
   console.log(i)
 }
//vd 32 -----------loop-----------------------------------------------
let namess = ['hassane','houcine','ali','houssem']
let X1 = 'hassane'
for(let i = 0 ; i<namess.length ; i++ ){
   console.log(namess[i]+i)
}
for(let i = X1.length-1 ; i>=0 ; i-- ){
   console.log(X1[i])
}
//vd 33 -----------loop-----------------------------------------------
