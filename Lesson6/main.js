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
//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }