for (let i = 0; i < 10; i++) {
    document.write('<div>Блок з довільним текстом</div>');
}

for (let i = 0; i < 10; i++) {
    document.write(`<div>Блок з довільним текстом та індексом № ${i}</div>`);
}

let i = 0;
while (i < 20) {
    document.write('<h1>Довільний текст в середині</h1>');
    i++;
}

let x = 0;
while (x < 20) {
    document.write(`<h1>Довільний текст в середині з індексом № ${x}</h1>`);
    x++;
}
// *****************************************************************************************************************************************
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write('<ul>');
for (const items of listOfItems) {
    document.write('<li>' + items + '</li>');
}
document.write('</ul>');
//******************************************************************************************************************************************
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://www.helsefreak.no/1655-large_default/yogi-tea-ginger-lemon-17-poser.jpg'
    },
];

for (const product of products) {
    document.write(
        `<div style="font-size: 25px; text-align: center">
            <h3 style="background-color: silver">${product.title}.<br>Price - ${product.price}</h3>
            <img src="${product.image}" alt="${product.title}" style="width: 250px"/>
        </div>`
    );
}
//******************************************************************************************************************************************
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

document.write("<h3>Користувачі зі статусом true:</h3>");
for (let user of users) {
    if (user.status) {
        document.write(`<p>${user.name}, ${user.status}</p>`);
    }
}
document.write("<h3>Користувачі зі статусом false:</h3>");
for (let user of users) {
    if (user.status === false) {
        document.write(`<p>${user.name}, ${user.status}</p>`);
    }
}
document.write("<h3>Користувачі, які старші за 30 років:</h3>");
for (let user of users) {
    if (user.age > 30) {
        document.write(`<p>${user.name}, ${user.age}</p>`);
    }
}