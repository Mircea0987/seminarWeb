let v1 = "test";
let v2 = "alt test";
let v3 = `${v1} and ${v2}`
console.log(v3);

var firstName = "Ada";

var array = ["John",21]

let intArray = [ 1,2,3,4,5,6,7,1];

array[0] = "Collins"




console.log(intArray.map(a=>a+1));

console.log(intArray.slice(1,5));


console.log("\n\n\n\n");
var copyArray =  intArray.slice();
console.log(copyArray);

function nameOfTheFunction(name,test,etc){
    if(name == null){
        console.log("name = null");
        return "some";
    }
    else if(test == null){
        console.log("test = null");
                return "some";


    }else{
        console.log("etc = null");
                return "some";

    }
}

let ceva = nameOfTheFunction("null","null",null);
console.log(ceva);