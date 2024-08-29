let button = document.getElementsByTagName('button')[0];
button.onclick = function () {
    document.getElementById('text').remove()
};
// *****************************************************************************************************************************************
document.getElementById('checkBtn').addEventListener('click', () => {
    const age = document.getElementById('age').value;
    const message = age < 18 ? "Вам менше ніж 18 років!" : "Ваш вік достатній.";
    console.log(message);
    document.getElementById('info').textContent = message;
});
// *****************************************************************************************************************************************
document.getElementById('submitBtn').addEventListener('click', () => {
    const userObject = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        age: document.getElementById('age1').value
    };
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `${userObject.name}<br>${userObject.surname}<br>${userObject.age}`;
});
// *****************************************************************************************************************************************
const count = +localStorage.counter + 1;
localStorage.counter = count;
document.getElementById('counter').innerText = count;
// *****************************************************************************************************************************************
document.getElementById('kgInput').addEventListener('input', () => {
    const kg = +document.getElementById('kgInput').value;
    document.getElementById('poundsOutput').textContent = (kg * 2.20462).toFixed(1);
});
// *****************************************************************************************************************************************
function addToLocalStorage(arrayName, objToAdd) {
    const array = JSON.parse(localStorage.getItem(arrayName) || '[]');
    array.push(objToAdd);
    localStorage.setItem(arrayName, JSON.stringify(array));
}
addToLocalStorage('sessionsList', {});
// *****************************************************************************************************************************************
const table = document.getElementById('table');
const tableGenerator = document.forms['tableGenerator'];
tableGenerator.onsubmit = function (e) {
    e.preventDefault();
    const rows = +tableGenerator.lines.value;
    const cells = +tableGenerator.cells.value;
    const content = tableGenerator.data.value;
    console.log(rows, cells, content);

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cells; j++) {
            const td = document.createElement('td');
            td.innerText = content;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
