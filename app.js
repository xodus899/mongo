const mongoose = require('mongoose');
// url to connect /db name
async function main() {
  await mongoose.connect('mongodb://localhost:27017/fruitsDB');
  console.log("connected")
}

main().catch(err => console.log(err));

//create a SCHEMA that sets out the fields each document will have and their datatypes
const fruitSchema = new mongoose.Schema ({
	name: String,
	rating: Number,
	review: String
});

//create a MODEL
const Fruit = new mongoose.model ("Fruit", fruitSchema);

//create a DOCUMENT
const fruit = new Fruit ({
	name: "Apple",
	rating: 7,
	review: "Great!"
});

//save the document
console.log(fruit);
fruit.save();
