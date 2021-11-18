const mongoose = require('mongoose');
// url to connect /db name
async function main() {
  await mongoose.connect('mongodb://localhost:27017/fruitsDB');
  console.log("connected")
};

main().catch(err => console.log(err));

//create a SCHEMA that sets out the fields each document will have and their datatypes
const fruitSchema = new mongoose.Schema ({
  // _id: Number,
	name: {
    type:String,
    required:[true, "Name is require, please check your entry"]
  },
	rating: {
    type:Number,
    min:1,
    max:10,
  },
	review: String
});

//create a MODEL - use singular name of collection
// will automatically convert fruit to fruits to create collection fruits
const Fruit = new mongoose.model ("Fruit", fruitSchema);

//create a DOCUMENT
// add a fruit to the Fruit model, following the fruit schema
const fruit = new Fruit ({
  // _id:1,
	name: "Starfruit",
	rating: 6,
	review: "Sweet flavor!"
});

const orange = new Fruit ({
	name: "orange",
	rating: 6,
	review: "Great flavor!"
});

const banana = new Fruit ({
	name: "Banana",
	rating: 4,
	review: "Too sweet!"
});

const kiwi = new Fruit ({
	name: "Kiwi",
	rating: 8,
	review: "Nice texture!"
});

// allows to save many fruits at once
// connects to relavent collection/schema
// Fruit.insertMany([kiwi,orange,banana], (err) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("All fruits saved to fruitsDB");
//   }
// })

//save the document into the fruits collection inside the fruitsDB
// console.log(fruit);
// fruit.save();


const personSchema = new mongoose.Schema ({
  name: String,
  age: Number
});

// converts person to plural collection people
const Person = new mongoose.model("Person", personSchema);

const person = new Person ({
  name: "John",
  age: 37
});

// console.log(person);
// person.save();

// update item by id Model.updateOne()
Fruit.updateOne({_id:"6196ab6957ed6b8eefd95b9c"}, {rating: 8}, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log("Successfully updated document");
  }

});

//Model.deleteOne()
// Fruit.deleteOne({_id:"6196902fa616904491ef1c8d"}, (err) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Successfully DELETED from document");
//   }
// });

// Model.deleteMany()  --- remove any with the case of Apple
// Fruit.deleteMany({name:"Apple"}, (err) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Successfully DELETED from document");
//   }
// });

// reads fruitsDB, fruit schema, fruits collections to find all fruits. Can specify more specific query if needed, using query.where
// read db (will not work if insert or save is being used) Model.find()
Fruit.find((err, fruits) => {
    if(err){
    console.log(err);
    } else {
        fruits.forEach((fruit) =>{
        console.log(fruit.name);
        });
   }

   // close connection inside callback
   mongoose.connection.close();
   console.log("CONNECTION CLOSED");
});
