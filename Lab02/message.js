//Export value
exports.name="Hello";

//Export function
exports.sum=function(a,b){return a + b}

//list
exports.myCars=["Mazda","BMW","Ford"]

//export Class
class car{
    constructor(type){
        this.type=type;
    }

    model(){
        return this.type;
    }
}
exports.car=car

//Second way to export a class
exports.myClass = class{
    constructor(age){
        this.age=age;
    }
    age(){
        return this.age;
    }

}
