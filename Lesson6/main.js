countArray = ['hello world', 'lorem ipsum', 'javascript is cool'];
console.log(countArray.join('').length); // довжина всього массива
for (const element of countArray) {
    console.log(element.length) // довжина кожного окремого елемента в массиві
}
//******************************************************************************************************************************************
lowerArray = ['hello world', 'lorem ipsum', 'javascript is cool'];
for (const arrayElement of lowerArray) {
    console.log(arrayElement.toUpperCase());
}
//******************************************************************************************************************************************
upperArray = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
for (const arrElement of upperArray) {
    console.log(arrElement.toLowerCase());
}
//******************************************************************************************************************************************
let str = ' dirty string   ';
console.log(str.trim());
//******************************************************************************************************************************************
const strToArr = (text) => text.split(' ');
console.log(strToArr('Ревуть воли як ясла повні'));
//******************************************************************************************************************************************
numsToStr = [10,8,-7,55,987,-1011,0,1050,0];
console.log(numsToStr.map(nums => nums.toString()));
//******************************************************************************************************************************************
let nums = [11,21,3];
const sortNums = (array, direction) => {
    if (direction === 'ascending') {
        return array.sort((a, b) => a - b);
    }else if (direction === 'descending') {
        return array.sort((a, b) => b - a);
    }
};
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));
//******************************************************************************************************************************************
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
const sort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
const filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
const map = coursesAndDurationArray.map((value, index) => value.id = index + 1);
//******************************************************************************************************************************************
const values = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits = ['♠', '♣', '♥', '♦'];

    const cards = [];
    for (const suit of suits) {
        for (const value of values) {
            const card = { value, suit };
            if (suit === '♥' || suit === '♦') {
                card.color = 'red';
            } else {
                card.color = 'black';
            }
            cards.push(card);
        }
    }
console.log(cards)

const aceOfSpades = cards.find(card => card.value === 'A' && card.suit === '♠');
console.log("Піковий туз:", aceOfSpades);

const sixes = cards.filter(card => card.value === '6');
console.log("Всі шістки:", sixes);

const redCards = cards.filter(card => card.suit === '♥' || card.suit === '♦');
console.log("Всі червоні карти:", redCards);

const diamonds = cards.filter(card => card.suit === '♦');
console.log("Всі буби:", diamonds);

const clubs9AndAbove = cards.filter(card => card.suit === '♣' && values.indexOf(card.value) >= values.indexOf('9'));
console.log("Всі трефи від 9 та більше:", clubs9AndAbove);
//******************************************************************************************************************************************
const reduce = cards.reduce((accumulator, card) => {
    if (card.suit === '♠'){
        accumulator.spades.push(card);
    } else if (card.suit === '♣'){
        accumulator.clubs.push(card);
    }else if (card.suit === '♥'){
        accumulator.hearts.push(card);
    }else if (card.suit === '♦'){
        accumulator.diamonds.push(card);
    }
    return accumulator;
}, {spades:[], clubs:[], hearts:[], diamonds:[]});

console.log(reduce)
//******************************************************************************************************************************************
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
const sass = coursesArray.filter(course => course.modules.includes('sass'));
const docker = coursesArray.filter(course => course.modules.includes('docker'));
console.log(sass)
console.log(docker)
