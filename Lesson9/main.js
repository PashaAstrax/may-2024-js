let block = document.createElement('div');
console.log(block);
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
block.style.backgroundColor = 'blue';
block.style.color = 'white';
block.style.fontSize = '14px';
document.body.appendChild(block);
let cloneBlock = block.cloneNode(true);
document.body.appendChild(cloneBlock);
//******************************************************************************************************************************************
const array = ['Main','Products','About us','Contacts'];
const ul = document.createElement('ul');
console.log(array);
for (const item of array) {
    const li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
}
document.body.appendChild(ul);
//******************************************************************************************************************************************
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const element of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.innerText = `${element.title} - ${element.monthDuration}`;
    document.body.appendChild(div);
}
//******************************************************************************************************************************************
let coursesAndDurationArr = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const element of coursesAndDurationArr) {
    const divElement = document.createElement('div');
    divElement.classList.add('item');

    const h1 = document.createElement('h1');
    h1.innerHTML = element.title;

    const p = document.createElement('p');
    p.innerHTML = element.monthDuration;

    divElement.append(h1, p);

    document.body.appendChild(divElement);
}
