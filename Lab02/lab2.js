//Exercise 1:
function gretter(myArr, counter){
    const greetText = 'Hello ';

    for(let name of myArr){
        console.log(greetText + name);
    }
}
console.log('EX1: ')
gretter(['Randy Savage','Ric Flair','Hulk Hogan'], 3);
console.log()

//Exercise 2:
function capitalize(word){
    const [fl,...rem] = word;
    return fl.toUpperCase()+rem.join('');
}
console.log('EX2: ')
console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));
console.log()

//Exercise 3:
const colors = ['red','green','blue']
let capitalizedColors = colors.map(c => capitalize(c));
console.log('EX3: ');
console.log(capitalizedColors)
console.log()

//Exercise 4:
var values = [1,60,34,30,20,5];
var filterLessThan20 = values.filter( v => v < 20);
console.log('EX4: ');
console.log(filterLessThan20);
console.log()

//Exercise 5:
var array = [1,2,3,4]
const calculateSum = array.reduce((t,e) => t+e);
const calculateProduct = array.reduce((t,e) => t*e);
console.log('EX5: ');
console.log(calculateSum);
console.log(calculateProduct);
console.log()

//Exercise 6:
class Car{
    constructor(model, year){
        this.model = model;
        this.year = year;
    }

    setModel(m){this.model = m};
    getModel() {return this.model};

    setYear(y){this.year = y};
    getYear() {return this.year};

    details(){
        return `Model: ${this.model} Engine ${this.year}`;
    }
}

class Sedan extends Car{
    constructor(model,year,price){
        super(model,year);
        this.price = price;
    }

    setPrice(p){this.price= p}
    getPrice(){this.price}

    info(){
        return `${this.model} has a balance of $${this.price.toFixed(2)}`;
    }
}
console.log('EX6: ')
const Car2 = new Car('Pontiac Firebird', 1976);
const sedan = new Sedan('Volvo SD',2018,30000);
console.log(Car2.details());
console.log(sedan.info());