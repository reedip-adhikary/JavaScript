/**
 * Create a Backpack object.
 */

// const backpack = {
//   name: "Everyday Backpack",
//   volume: 30,
//   color: "grey",
//   pocketNum: 15,
//   strapLength: {
//     left: 26,
//     right: 26,
//   },
//   lidOpen: false,
//   toggleLid: function (lidStatus) {
//     this.lidOpen = lidStatus;
//   },
//   newStrapLength: function (lengthLeft, lengthRight) {
//     this.strapLength.left = lengthLeft;
//     this.strapLength.right = lengthRight;
//   },
// };

// console.log("The backpack object:", backpack);
// console.log("The pocketNum value:", backpack.pocketNum);

const laptop = {
  name: "HP Pavilion",
  color: "Black",
  display: 15.6,
  usbA: 2,
  typeC: 1,
  ethernet: true,
  hdmi: true,
  memory: {
    ram: "DDR4 - 8 GB",
    vram: "GTX 1650 DDR5 - 4 GB",
  },
  ssd: false,
  installssd: function (ssdstatus) {
    this.ssd = ssdstatus;
  },
  extraram: function (ramadd) {
    this.memory.ram = ramadd;
  },
};
