// Feynman Writing Prompts
//
// Callback Functions - a function that is passed into another function as a parameter. the cb function is executed inside of that other function.
//
// Closure - is a function that is INSIDE another function and has access to the variables of the function that it is inside of.
//
// arguments - are the actual values that get passed to the function
//
// Recursion - When a function can call on itself to solve problems   ??
//
// prototype - these are existing Objects that newly created objects inherit properties and methods from.
//
// Constructors - a method/subroutine that both creates an object and prepares it for use.



// Do not change any of the function names

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  var sum = 1;
  if(arguments.length === 0){
    return 0;
  } else if (arguments.length === 1){
    return arguments[0];
  } else {
    for (var i = 0; i < arguments.length; i++){
      sum *= arguments[i];
    }
    return sum;
  }
}

function invokeCallback(cb) {
  // invoke cb
  cb();
}

function sumArray(numbers, cb) {
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
  var sum = 0;
  numbers.forEach(function(num){
    sum += num;
  });
  cb(sum);
}

function forEach(arr, cb) {
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)

  arr.forEach(function(value){
    cb(value);
  });
}

function map(arr, cb) {
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument

  var new_arr = [];

  arr.forEach(function(value){
    new_arr.push(cb(value));
  });

  return new_arr;
}

function getUserConstructor() {
  // create a constructor called User
  // it should accept an options object with username, name, email, and password properties
  // in the constructor set the username, name, email, and password properties
  // the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
  // {{name}} should be the name set on each instance
  // return the constructor
  return function User(options){

    this.username = options.username;
    this.name = options.name;
    this.email = options.email;
    this.password = options.password;


    this.sayHi = function(name){
      return 'Hello, my name is ' + this.name;
    };
  };
}

function addPrototypeMethod(Constructor) {
  // add a method to the constructor's prototype
  // the method should be called 'sayHi' and should return the string 'Hello World!'

  Constructor.prototype.sayHi = function(){
    return 'Hello World!';
  };

}

function addReverseString() {
  // add a method to the string constructor's prototype that returns a reversed copy of the string
  // name this method reverse
  // hint:
  // you will need to use 'this' inside of reverse

  String.prototype.reverse = function(){
    var rev_str = '';

    for(var i = this.length - 1; i >= 0; i--){
      rev_str += this[i];
    }
    return rev_str;
  };

}

function nFactorial(n) {
  // return the factorial for n
  // solve this recursively
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  var sum = 1;

  for(var i = n; i > 1; i--){
    sum *= i; 
  }
  return sum;
}

function cacheFunction(cb) {
  // Extra Credit
  // use closure to create a cache for the cb function
  // the function that you return should accept a single argument and invoke cb with that argument
  // when the function you return is invoked with an argument it should save that argument and its result
  // when the function you return is called again with an argument that it has seen before it should not call cb
  // but should instead directly returned the previous result
  // example:
  // cb -> function(x) { return x * x; }
  // if the function you return is invoked with 5 it would pass 5 to cb(5) and return 25
  // if the function you return is invoked again with 5 it will look on an object in the closure scope
  // and return 25 directly and will not invoke cb again



}


// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyArguments: multiplyArguments,
  invokeCallback: invokeCallback,
  sumArray: sumArray,
  forEach: forEach,
  map: map,
  getUserConstructor: getUserConstructor,
  addPrototypeMethod: addPrototypeMethod,
  addReverseString: addReverseString,
  nFactorial: nFactorial,
  cacheFunction: cacheFunction
};
