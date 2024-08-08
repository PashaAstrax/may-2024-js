let arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
// console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])
// *************************************
let book1 = {
    title: 'Harry Potter',
    pageCount: 320,
    genre: 'fantasy'
}
let book2 = {
    title: 'The Lord of the Rings',
    pageCount: 290,
    genre: 'fantasy novel'
}
let book3 = {
    title: 'The Da Vinci Code',
    pageCount: 400,
    genre: 'thriller'
}
//**************************************
let book4 = {
    title: 'Harry Potter',
    pageCount: 320,
    genre: 'fantasy',
    authors: [
        {
            name: 'J.K. Rowling',
            age: 59
        }
    ]
}
let book5 = {
    title: 'The Lord of the Rings',
    pageCount: 290,
    genre: 'fantasy novel',
    authors: [
        {
            name: 'J.R.R. Tolkien',
            age: 99
        }
    ]
}
let book6 = {
    title: 'The Da Vinci Code',
    pageCount: 400,
    genre: 'thriller',
    authors: [
        {
            name: 'Dan Brown',
            age: 60
        }
    ]
}
//***************************************
let users = [
    user1 = {
        name: 'Vasya',
        username: 'vs',
        password: 'qwert'
    },
    user2 = {
        name: 'Petya',
        username: 'pt',
        password: 'yuiop'
    },
    user3 = {
        name: 'Taras',
        username: 'tr',
        password: 'asdfg'
    },
    user4 = {
        name: 'Sanya',
        username: 'sn',
        password: 'fghjk'
    },
    user5 = {
        name: 'olya',
        username: 'ol',
        password: 'hjklg'
    },
    user6 = {
        name: 'Ruslan',
        username: 'rl',
        password: 'zxcvb'
    },
    user7 = {
        name: 'Yura',
        username: 'yr',
        password: 'vbnmb'
    },
    user8 = {
        name: 'Ira',
        username: 'ia',
        password: 'zsedc'
    },
    user9 = {
        name: 'Ostap',
        username: 'ot',
        password: 'tfcvh'
    },
    user10 = {
        name: 'Pasha',
        username: 'ps',
        password: 'yhjuk'
    }
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)
//***************************************
let weather = [
    monday = {
        morning: 14,
        midday: 24,
        evening: 20
    },
    tuesday = {
        morning: 15,
        midday: 25,
        evening: 19
    },
    wednesday = {
        morning: 10,
        midday: 18,
        evening: 15
    },
    thursday = {
        morning: 16,
        midday: 23,
        evening: 20
    },
    friday = {
        morning: 18,
        midday: 24,
        evening: 22
    },
    saturday = {
        morning: 17,
        midday: 23,
        evening: 21
    },
    sunday = {
        morning: 12,
        midday: 20,
        evening: 18
    }
]
// *******************************************
let x = 5 !== 0 ? 'Вірно' : 'Невірно';
console.log(x)
// *******************************************
let time = 15;
if(time >= 0 && time <= 15){
    console.log('Це перша четверть');
}else if(time > 15 && time <= 30){
    console.log('Це друга четверть');
}else if(time > 30 && time <= 45){
    console.log('Це третя четверть');
}else if(time > 60 && time <= 59){
    console.log('Це четверта четверть');
}
// ******************************************
let day = 14;
if(day >= 0 && day <= 10){
    console.log('Перша декада');
}else if(day > 10 && day <= 20){
    console.log('Друга декада');
}else if(day > 20 && day <= 31){
    console.log('Третя декада');
}
//*******************************************
let numOfDay = 5;
switch (numOfDay){
    case 1:
        console.log('monday');
        break;

    case 2:
        console.log('tuesday');
        break;

    case 3:
        console.log('wednesday');
        break;

    case 4:
        console.log('thursday');
        break;

    case 5:
        console.log('friday');
        break;

    case 6:
        console.log('saturday');
        break;

    case 7:
        console.log('sunday');
        break;
}
//*****************************************
let a = 3;
let b = 8;
if (a > b){
    console.log(a, 'це максимальне число');
}else if(a < b){
    console.log(b, 'це максимальне число');
}else if(a === b){
    console.log(a, b, 'це рівні числа');
}
//****************************************
let xx = 0;
if(xx === 0 || xx === null || xx === undefined){
    console.log('default')
}
//******************************************
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if(coursesAndDurationArray[0].monthDuration > 5){
    console.log('супер');
}else if(coursesAndDurationArray[1].monthDuration > 5){
    console.log('супер');
}else if(coursesAndDurationArray[2].monthDuration > 5){
    console.log('супер')
}else if(coursesAndDurationArray[3].monthDuration > 5){
    console.log('супер')
}else if(coursesAndDurationArray[4].monthDuration > 5){
    console.log('супер')
}else if(coursesAndDurationArray[5].monthDuration > 5){
    console.log('супер')
}