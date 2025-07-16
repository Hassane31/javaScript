let name = "hassane ";
let age = 21 ;
console.log(`my name is ${name} and my age is ${age }`)     
//vd 8 ---------------------------------------------------------
let num1 = 5 
let num2 = 4
console.log(num1 ** num2) //pow 
console.log (5/4)
num1 += 1 
console.log(num1)
//vd 10 --------------------------------------------------------
console.log('4'-'3')
console.log(typeof Nan)
console.log(-'5')
console.log(+'5')
console.log(+true)
console.log(+false)
console.log(+null)
//vd 11 ---------------------------------------------------------
console.log(parseFloat('4.5'))
console.log(Number(4) )
console.log(parseInt('4 hassabe'))
//vd 12 ---------------------------------------------------------
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.isSafeInteger(-9007199254740991))
console.log(Number.isInteger(44))
console.log(Number.isNaN('ahmad'-5))
//vd 13 ---------------------------------------------------------
console.log(Math.E)
console.log(Math.PI)
console.log(Math.abs(-5))
console.log(Math.sqrt(4))
console.log(Math.round(10.2))
console.log(Math.max(1,2,4,5,6,8,9,0))
//vd 14 ---------------------------------------------------------
let X ;
// X = window.prompt() 
console.log(0.025 * X+'DA')
//vd 15 ---------------------------------------------------------
let Y =100 
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
console.log(name.indexOf('n',4)) //start serch
console.log(name.lastIndexOf('n'))
console.log(name.slice(2,5))
console.log(name.split('',3))
//vd 17 --------------------------------------------------------------
let n = 'i love java script'
console.log(n.slice(2,6))//accpet (-)
console.log(n.substring(2,6))// can t accpt (-)
console.log(n.substr(2,6))//look in th console
//vd 18 --------------------------------------------------------------
console.log(n.includes('a',2))//if exist ->true
console.log(n.startsWith('love',2))
console.log(n.endsWith('e',6))
//vd 19 --------------------------------------------------------------
let names = ['ahmed' ,'ali','somiya',]
console.log(names[names.length-1])
let object = [1,2,3,[1,2,99]]
console.log (object[3][2])
//modify in arry 
 names[3]= 'abderahmen'
 //vd 20 --------------------------------------------------------------
 names.push('jamel','taher')
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
  names.splice(2,1)
  console.log(names)
  names.splice(2,0,'mona','houcine')
  console.log(names)
  
  console.log(names.slice(0,2))
