const EventEmitters = require('events'); 

const c = new EventEmitters(); 

c.on('response', (name, id)=>{
    console.log(`data received ${name} with ${id}`); 
})

c.emit('response', 'jhon', 45);
