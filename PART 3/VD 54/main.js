let names = ['hasane','mouhammed','youcef','noname'];
let ages = ['12','21','22','21'];
let container = document.createElement('div')
document.body.appendChild(container);
container.style.textAlign = 'center';

function element(names,ages) {
    //elements 
    let card = document.createElement('div');
    let titel = document.createElement('h2');
    let age = document.createElement('p');
    let img = document.createElement('img');

    //content    
    let head = document.createTextNode(names);
    let ageContent = document.createTextNode(ages);
    img.src = 'IMG1.png';
    titel.appendChild(head);
    age.appendChild(ageContent);

    //style
    card.style.width = '200px';
    img.style.width = '100%';
    card.style.background = '#444';
    card.style.color = '#fff';
    card.style.padding = '10px';
    card.style.margin = '3px';
    card.style.display = 'inline-block';

    card.appendChild(titel);
    card.appendChild(age);
    card.appendChild(img);

    container.appendChild(card);
}
for(let i = 0 ; i<4; i++ ){
    element(names[i],ages[i]);
}