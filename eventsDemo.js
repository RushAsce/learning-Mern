import {EventEmitter} from 'events'

const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log('Hello ' + name);
}

function goodbyeHandler(name) {
    console.log('Goodbye  ' + name);
}

//register event listner
myEmitter.on('greet',greetHandler);
myEmitter.on('goodbye',goodbyeHandler);


//Emit events
myEmitter.emit('greet','john');
myEmitter.emit('goodbye','john');


//Error Handling
myEmitter.on('error',(err)=>{
    console.log('an error occured', err );
});

//stimulate error
myEmitter.emit('error',new Error('something wnt wrong'));