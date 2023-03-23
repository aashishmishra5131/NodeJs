const EventEmitter = require('events');
const eventEmitter = new EventEmitter();


class Person extends EventEmitter { 
    constructor(name){
        super();
        this._name = name;
    }
    get name(){
        return this._name;
    }
}

let pedro = new Person('Aashish');
pedro.on('name',(sc,msg)=>{
    console.log('my name is ' + pedro.name +" "+sc+" "+ msg);
});

pedro.emit('name',200,'Good');