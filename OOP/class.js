//Declaring a class
class Hero{
    //think of this as a constructor function; because it is
    constructor(name,level){
        //Instance Members i.e properties
        this.name =name,
        this.level = level
        this.greetHero= function(){
            return`hello ${this.name} you are at level ${this.level} `;
        }
    }

    //Creat prototype Memebers Here

}

//Generating Instance Of the Class; actual use case from the blueprint(class)
let hero = new Hero('ice',13);


//CLASS INHERITANCE----- inheriting propertis , method and functionality from another class
//There is too part of Class Inheritance
//1) The inheritor going to inherit the class : using the extend keyword
class Mega extends Hero{
    constructor(name,level,spell){
        //2) The inheritor actually drawing out a property: using the super() method
        super(name,level)
        this.spell = spell
    }
}

let proUser = new Mega('future',290,'avatar');
console.log(proUser.greetHero());