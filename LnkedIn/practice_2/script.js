/**
 * Use the global Date() object to transform dates.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

// import Backpack from "./Backpack.js";

// const everydayPack = new Backpack(
//   "Everyday Backpack",
//   30,
//   "grey",
//   15,
//   26,
//   26,
//   false,
//   "December 5, 2018 15:00:00 PST"
// );

// console.log("The everydayPack object:", everydayPack);
// console.log("Date acquired:", everydayPack.dateAcquired);

import Laptop from "./Backpack.js";

const laptop = new Laptop(
  "HP Pavilion",
  "Black",
  2,
  1,
  "1920*1080",
  15.6,
  "1TB",
  "DDR4 - 8GB",
  "GTX 1650 DDR5 - 4GB",
  false
);

console.log("Laptop:", laptop);
console.log("Date acquired:", laptop.resolution);
