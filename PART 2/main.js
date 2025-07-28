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
//////////////////// vd 49 //////////////////////////////