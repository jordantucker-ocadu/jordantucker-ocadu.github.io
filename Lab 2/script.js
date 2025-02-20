var kitty = {
    cute: true,
    hungry: 0.8,
    lives: 9,
    fur: {
        fluffy: true,
        colour: "red",
    },
    threats: null,
    meow: function (){ //a function contained as a key value pair of an object is called a method
        return "meow"
    }, // anonymous functions haave no name
};

console.log(kitty.meow()); // ()function invokation operator

console.log(kitty.two);
//variable name that is not declared gives an error
// an undeclared paramter of an object gives undefined and no error

kitty.lives++;
console.log(kitty);

kitty.two = 'two' // objects are changeable and mutable
console.log(kitty);

//kitty.travel(); // error because you cant invoke undefined as a function

console.log(kitty.future+++); //results in a type number with value NaN which is "Not a Number"

console.log(kitty.lives / null);

//null gets coerced to 0 when changing to type number!!

// . accessor of an object
kitty.fur.fluffy;

if(kitty.cute){
    console.log('true?');
}else{
    console.log('false');
}

for(key in kitty){
    console.log(key);
    kitty[key]; // alternate accessor for objects in javasript
}

var x = {};
x.y = 12;//mutates object with assignment
x.z; //returns undefined
x.z()// throws an error by trying to invoke undefined as a function
x.z = function(){}; // method
x.z(); //invoke the z method and returns undefined unless modified
