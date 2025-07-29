let head = document.getElementById('head')
console.log(head)
head.innerHTML = 'hello'
head.style.color = 'red'

let classHead = document.getElementsByClassName('head')[1]
console.log(classHead)
classHead.style.color = 'blue'

let tag = document.getElementsByTagName('h1')[3]
console.log(tag)
tag.style.color = 'green'

let head1 = document.querySelectorAll('#head')[1]//get by ID ->like CSS
head1.style.color = 'yellow'

//body
let body = document.body ;
console.log(body)
body.style.backgroundColor = '#444'

let images = document.images[0]
console.log(images.src)
images.alt = 'test'
console.log(images.alt)

let links = document.links[1]
console.log(links)
console.log(links.href)
links.href ='https://www.instagram.com'//change link

let forms = document.forms
console.log(forms)
// vd 49---<element attribute > text <element>--------------

let img = document.getElementById('img')
console.log(img.src)
img.src = 'IMG2.png'
console.log(img.hasAttributes())
console.log(img.attributes)
img.setAttribute('title', 'ahmed')
console.log(img.title)
img.setAttribute('src','IMG1.png')
img.removeAttribute('alt')//remove

// vd 50------inner and outer-------------------------------
let container = document.getElementById('container')
console.log(container)
console.log(container.outerHTML)
console.log(container.innerHTML)
container.innerHTML = '<h1>hello JS </h1>'
//container.outerHTML  = '<h1>hello JS </h1>'//delete <div>....

//container.outerText = '<h1>hello JS </h1>'//delete <div>....
container.innerText = '<h1>hello JS </h1>'

// vd 51------sibling and parent-----------------------------
let element = document.getElementById('second')

console.log(element.previousElementSibling)
console.log(element.nextElementSibling)
element.nextElementSibling.innerHTML = 'text'

element.previousElementSibling.remove()

console.log(element.previousSibling)//return any thing previous
console.log(element.previousElementSibling)//return jast elments

//console.log(element.parentElement)
//element.parentElement.remove()

// vd 52------dom css style-------------------------------
console.log(container)

//element.style.property = value
container.style.backgroundColor= 'red';
container.style.padding = '100px';

//element.style.cssText=
container.style.cssText = `color : white;
padding : 100px ;
background : red ;

`
container.style.removeProperty('padding')
container.style.setProperty('color','blue','important')

// vd 53-----create elements by javascript------------------
