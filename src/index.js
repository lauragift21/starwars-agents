import uniqueRandomArray from "unique-random-array";
import starWarsNames from "./starwars-names.json";

var getRandomItem = uniqueRandomArray(starWarsNames);

module.exports = {
  all: starWarsNames,
  random: random
};

function random(number) {
  "use strict";
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (let i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
