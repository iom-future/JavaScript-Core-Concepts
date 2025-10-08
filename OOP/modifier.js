//class modifiers/ access modifiers are keywords used to define the scope and accessibuility of class instance member
//but in JS those keyword doesnt exist so we use techniques to achieve it
//when you make a property or method private that method or property cant be read
//private 

//property marked with this modifier can be accessible publicly
//public 

//allow you to only  use that property in your class 
//protected 

function myConstructor(publicField,privateField,ProtectedField){
    //public modifier -- TECHNIQUE: just normal initialization of property
    this.publicField = publicField 
    
    //private modifier -- TECHNIQUE: Closure-- start the variable Name with an underscore
    const _privateField = privateField

    //protected field -- TECHNIQUE: Closure-- start the variable Name with an underscore
    const _protectedField = ProtectedField

    //public method
    this.publicMethod = function(){
        return `This is your public field: ${this.publicField}`
    }

    //private method
    function _privateMethod(){
        return `This is your private field: ${_privateField}`
    }

    //protected method
    function _protectedMethod(){
        return `This is your protected field: ${_protectedField}`
    }
    

    //method to access protected method, cause protected data and private data can be accessed within the class or function
    this.accessProtectedMethod = function(){
        return _protectedMethod();
    }  
}

//One thing to note is thats JS doesnt have real modifiers like other languages only conventions to tell othe JS developer 
//that this is a prvate , public or protected field

const instanceOfMyconstructor = new myConstructor("public data", "private data", "protected data");
console.log(instanceOfMyconstructor.publicField);
console.log(instanceOfMyconstructor.privateField);
console.log(instanceOfMyconstructor.protectedField);
console.log(instanceOfMyconstructor.publicMethod());
console.log(instanceOfMyconstructor.accessProtectedMethod());

