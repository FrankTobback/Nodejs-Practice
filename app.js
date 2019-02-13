let fs = require('fs');









// // makes directory and puts a file in it
//
// fs.mkdir("stuff", function(){
//   fs.readFile('readMe.txt', 'utf8', function (err, data) {
//     fs.writeFile('./stuff/writeMe.txt', data);
//   });
// });

// //empties and deletes directory

// fs.unlink("./stuff/writeMe.txt", function(){
//   fs.rmdir("stuff");
// });




// //deletes a file
// fs.unlink("writeMe.txt");


// //Asynchronis doesn't block rest of the code. reads and writes a file.
// fs.readFile('readMe.txt', 'utf8', function(err, data){
//   fs.writeFile('writeMe.txt', data, (error) => { /* handle error */ });
// });
//
// // //Synchronis blocks the code that comes after it till it's done. writes a file
// // fs.writeFileSync('writeMe.txt', readMe);



// var events = require('events');
// var util = require('util');
//
// var Person = function(name){
//   this.name = name;
// };
//
// util.inherits(Person, events.EventEmitter);
//
// var vegeta = new Person('vegeta');
// var beerus = new Person('beerus');
// var whis = new Person('whis');
// var people = [vegeta, beerus, whis];
//
// people.forEach(function(person){
//   person.on("speak", function(mssg){
//     console.log(person.name + ' said: ' + mssg);
//   });
// });
//
// vegeta.emit("speak", "What is the matter clown!");
// beerus.emit("speak", "I shall punish earth!");
// whis.emit("speak", "Ooh my!");



// var myEmitter = new events.EventEmitter();
//
// myEmitter.on('someEvent', function(mssg){
//   console.log(mssg);
// });
//
// myEmitter.emit('someEvent', 'The event was emitted');






// console.log(things.counter(["vegeta", "goku", "beerus"]));
// console.log(things.adder(5,6));
// console.log(things.adder(things.pi, 5));
