function searchProperty(property, obj){
    
    if(obj.hasOwnProperty(property)){
        console.log(obj[property]);
    } else {
        console.log('undefine');
    }
    
}

var obj = {
    a: 5,
    b: 'as'
};

var obj1 = Object.create(obj);
obj1.d = 123;

searchProperty('d', obj1);
searchProperty('a', obj1);