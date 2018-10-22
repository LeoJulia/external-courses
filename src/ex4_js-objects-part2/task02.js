function newObj(){
    return Object.create(null);
}

var obj = newObj();

obj.a = 123;

console.log(obj);