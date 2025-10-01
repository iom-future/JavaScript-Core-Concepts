//the object.create() method creates a new object using an existing object as the prototype[first design] of the newly created object
//.........using an existing object as the prototype[first design]  of the newly created object........... ; this just mean the newly createdobj inherits the property of the existinh obj

let person ={
    greet: function() {
        console.log(this.name,this.age);
    }
}
person.greet();
//meth 1 - create and initialize properties after
let user = Object.create(person);
user.name = 'isaac';
user.age = 17;
user.greet();
//meth 2 - create and initialize properties right there
let user2 = Object.create(person,{
    name: {value:'future'},
    age: {value: 3000}
})
