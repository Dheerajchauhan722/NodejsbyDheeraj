const EventEmitter=require('events');
const event= new EventEmitter();

//or
// const event=require('events');

// defining of event or listening the event_name event
event.on('event_name',(param)=>{
    console.log('YOUR NAME IS DHEERAJ CHAUHAN');
    console.log(param);

}); 

// calling the event
event.emit('event_name','param');