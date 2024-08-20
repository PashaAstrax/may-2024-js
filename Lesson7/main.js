function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [
    new User("1", 'John', 'Johnson', 'john@gmail.com', '+3152874125'),
    new User('2', 'Walter', 'Walterson', 'walter@gmail.com', '+318745260'),
    new User('3', 'Gary', 'Garyson', 'gary@gmail.com', '+314125632'),
    new User('4', 'Adam', 'Adamson', 'adam@gmail.com', '+314127374740'),
    new User('5', 'Jessy', 'Jeyson', 'jess@gmail.com', '+3141277411'),
    new User('6', 'Scott', 'Scotland', 'scott@gmail.com', '+31666073748'),
    new User('7', 'Nicolas', 'Nic', 'nico@gmail.com', '+3141273748'),
    new User('8', 'Travis', 'Travison', 'travis@gmail.com', '+3111273748'),
    new User('9', 'Arnold', 'Arni', 'arn@gmail.com', '+3141273999'),
    new User('10', 'Paul', 'Paulone', 'Paul@gmail.com', '+3141273714')
]
console.log(users);
//******************************************************************************************************************************************
const filter = users.filter(user => user.id % 2 === 0);
console.log(filter);
//******************************************************************************************************************************************
const sort = users.sort((a, b) => a.id - b.id);
const sortReverse = users.sort((a, b) => b.id - a.id);
console.log(sort);
console.log(sortReverse);
//******************************************************************************************************************************************
class Client{
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clients = [
    new Client("1", 'John', 'Johnson', 'john@gmail.com', '+3152874125', ['phone']),
    new Client('2', 'Walter', 'Walterson', 'walter@gmail.com', '+318745260', ['tv', 'PS5', 'games']),
    new Client('3', 'Gary', 'Garyson', 'gary@gmail.com', '+314125632', ['blender', 'knife']),
    new Client('4', 'Adam', 'Adamson', 'adam@gmail.com', '+314127374740', ['headphones']),
    new Client('5', 'Jessy', 'Jeyson', 'jess@gmail.com', '+3141277411', ['bike', 'gloves', 'glasses']),
    new Client('6', 'Scott', 'Scotland', 'scott@gmail.com', '+31666073748', ['laptop', 'mouse', 'keyboard', 'chair']),
    new Client('7', 'Nicolas', 'Nic', 'nico@gmail.com', '+3141273748', ['scooter', 'protective suit', 'gloves', 'helmet', 'shoes']),
    new Client('8', 'Travis', 'Travison', 'travis@gmail.com', '+3111273748', ['hair dryer', 'vacuum cleaner']),
    new Client('9', 'Arnold', 'Arni', 'arn@gmail.com', '+3141273999', ['iron', 'razor', 'epilator']),
    new Client('10', 'Paul', 'Paulone', 'Paul@gmail.com', '+3141273714', ['iphone', 'watch', 'airpods', 'macbook'])
]
console.log(clients);
//******************************************************************************************************************************************
const clientsSort = clients.sort((a, b) => a.order.length - b.order.length);
console.log(clientsSort);
//******************************************************************************************************************************************
function Car(model, manufacturer, year, maxSpeed, engine) {
            this.model = model;
            this.manufacturer = manufacturer;
            this.year = year;
            this.maxSpeed = maxSpeed;
            this.engine = engine;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    };
    this.info = function (){
        console.log(`model - ${this.model}, manufacturer - ${this.manufacturer}, year - ${this.year}, max speed - ${this.maxSpeed}, engine - ${this.engine}`);
    };
    this.increaseMaxSpeed = function(newSpeed){
        this.maxSpeed += newSpeed;
        console.log(`Нова максимальна швидкість - ${this.maxSpeed} км/год`)
    };
    this.changeYear = function(newValue){
        this.year += newValue;
        console.log(`Новий рік випуску - ${this.year}.`)
    };
    this.addDriver = function(driver){
        this.driver = driver;
        console.log(`Ім'я: ${driver.name}, Вік: ${driver.age}, Робота: ${driver.work}`);
    };
}
let carHonda = new Car('Accord', 'Honda', 2014, 240, 2.5)
console.log(carHonda)

carHonda.drive();
carHonda.info();
carHonda.increaseMaxSpeed(50);
carHonda.changeYear(4);
carHonda.addDriver({name: "Paul", age:39, work: true});
//******************************************************************************************************************************************
class Cars{
    constructor(model, manufacturer, year, maxSpeed, engine){
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    };

    drive(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км. на годину`);
    };

    info(){
        console.log(`model - ${this.model}, manufacturer - ${this.manufacturer}, year - ${this.year}, max speed - ${this.maxSpeed}, engine - ${this.engine}`);
    };

    increaseMaxSpeed(newSpeed){
        this.maxSpeed += newSpeed;
        console.log(`Нова максимальна швидкість - ${this.maxSpeed} км/год`)
    };

    changeYear(newValue){
        this.year += newValue;
        console.log(`Новий рік випуску - ${this.year}.`)
    };

    addDriver (driver){
        this.driver = driver;
        console.log(this.driver);
    };
}
const carToyota = new Cars("Camry", "Toyota", 2018, 240, 2.2);
console.log(carToyota);

carToyota.drive();
carToyota.info();
carToyota.increaseMaxSpeed(40);
carToyota.changeYear(4);
carToyota.addDriver({name: "Paul", age:39, work: true});
//******************************************************************************************************************************************
class Cinderella{
    constructor(name, age, footSize){
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    };
}
let cinderellas = [
    new Cinderella("Dolores", 18, 34),
    new Cinderella("Helen", 16, 35),
    new Cinderella("Tracy", 20, 36),
    new Cinderella("Phyllis", 19, 37),
    new Cinderella("Alice", 21, 39),
    new Cinderella("Kim", 17, 38),
    new Cinderella("Brenda", 15, 33),
    new Cinderella("Edna", 14, 32),
    new Cinderella("Georgia", 13, 31),
    new Cinderella("Beverly", 12, 30),
];
console.log(cinderellas);

class Prince{
    constructor(name, age, shoes) {
        this.name = name;
        this.age = age;
        this.shoes = shoes;
    };
}
let prince = new Prince("John", 18, 36);
console.log(prince)
// сумісність по розміру ноги
for (foot of cinderellas){
    if(foot.footSize === prince.shoes){
        console.log(`Попелюшку для принца звуть - "${foot.name}" і її розмір ноги, такий самий як у принца - ${foot.footSize} розмір.`);
    }
}
// сумісність по віку
cinderellas.find(function callback(number){
    if(number.age === prince.age){
        console.log(`Попелюшку для принца звуть - "${number.name}" і її вік такий самий як у принца - ${number.age} років.`);
    }
});
