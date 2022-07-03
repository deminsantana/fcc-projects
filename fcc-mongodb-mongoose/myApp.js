require('dotenv').config();
const mongoose = require('mongoose');

var Person;

Person = require('./models/person');

const createAndSavePerson = (done) => {
  const deminSantana = new Person({name:'Demin', age: 45, favoriteFoods: ['pizza', 'hamburguer', 'pasta']});

  deminSantana.save(function(err, data) {
    if(err) return console.error(err);
    done(null, data);
  });
};


 arrayOfPeople = [
    {name:'Salome', age: 38, favoriteFoods: ['pizza','apple']},
    {name:'Jose', age: 25, favoriteFoods: ['hamburguer','pasta']},
    {name:'Maria', age: 355, favoriteFoods: ['Beets','pasta']},
    {name:'Pablo', age: 40, favoriteFoods: ['Fish','pasta']},
    {name:'Carolina', age: 35, favoriteFoods: ['Broccoli','pasta']},
];


const createManyPeople = (arrayOfPeople, done) => {
 Person.create(arrayOfPeople, function (err, people) {
    if (err) return console.log(err);
    done(null, people);
  });
};

var findPeopleByName = function(personName, done) {
  Person.find({name: personName}, function (err, personFound) {
    if (err) return console.log(err);
    done(null, personFound);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({food}, function (err, food) {
    if (err) return console.log(err);
    done(null, food);
  });
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log('Database conected'));


// CRUD Parte 1: CREATE (Crear)
const someFunc = function(done) {
  //... do something (risky) ...
  if (error) return done(error);
  done(null, result);
};




/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
