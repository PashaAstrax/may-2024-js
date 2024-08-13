function square(a, b) {
    return a * b;
}
console.log(square(4, 6));
// *****************************************************************************************************************************************
function squareCircle(r){
    return Math.PI * r * r;
}
console.log(squareCircle(5));
// *****************************************************************************************************************************************
function squareСylinder(r, h){
    return 2 * Math.PI * r * (r + h);
}
console.log(squareСylinder(5, 9));
// *****************************************************************************************************************************************
function printArrayElement(arr){
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printArrayElement(myArr);
// *****************************************************************************************************************************************
function createParagraph(text){
    document.write(`<p>${text}</p>`);
}
createParagraph("some text");
// *****************************************************************************************************************************************
function createList(text){
    document.write(`<ul>
                        <li>${text}</li>
                        <li>${text}</li>
                        <li>${text}</li>
                    </ul>`);
}
createList("Some text")
// *****************************************************************************************************************************************
function createListCycle(text, num){
    document.write('<ul>');
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}
createListCycle("some new text", 5);
// *****************************************************************************************************************************************
function createArray(newArr){
    document.write('<ul>');
    for (const item of newArr) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}
createArray([25, 85, 33, 'sdfgc', true]);
// *****************************************************************************************************************************************
function createObj(users){
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}
createObj([
    {id: 1, name: 'Paul', age: 10},
    {id: 2, name: 'Mike', age: 20},
    {id: 3, name: 'Dave', age: 30},
])
// *****************************************************************************************************************************************
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
const numbers = [5, 3, 8, 1, 2];
console.log(findMin(numbers));
// *****************************************************************************************************************************************
function sumArr(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += item;
    }
    return sum;
}
console.log(sumArr([5, 28, 9]))
// *****************************************************************************************************************************************
function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
console.log(swap([11, 22, 33, 44], 0, 1))
// *****************************************************************************************************************************************
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            return sumUAH / currencyValues[i].value;
        }
    }
}
console.log(exchange(18000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'EUR'));
