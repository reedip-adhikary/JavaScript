// class Backpack {
//   constructor(
//     name,
//     volume,
//     color,
//     pocketNum,
//     strapLengthL,
//     strapLengthR,
//     lidOpen,
//     dateAcquired
//   ) {
//     this.name = name;
//     this.volume = volume;
//     this.color = color;
//     this.pocketNum = pocketNum;

//     this.strapLength = {
//       left: strapLengthL,
//       right: strapLengthR,
//     };
//     this.lidOpen = lidOpen;
//     this.dateAcquired = dateAcquired;
//   }
//   toggleLid(lidStatus) {
//     this.lidOpen = lidStatus;
//   }
//   newStrapLength(lengthLeft, lengthRight) {
//     this.strapLength.left = lengthLeft;
//     this.strapLength.right = lengthRight;
//   }
//   backpackAge() {
//     let now = new Date();
//     let acquired = new Date(this.dateAcquired);
//     let elapsed = now - acquired; // elapsed time in milliseconds
//     let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
//     return daysSinceAcquired;
//   }
// }

// export default Backpack;

class Laptop {
  constructor(
    name,
    color,
    usbA,
    typeC,
    resolution,
    display,
    storage,
    ram,
    gpu,
    ssd
  ) {
    this.name = name;
    this.color = color;
    this.usbA = usbA;
    this.typeC = typeC;
    this.resolution = resolution;
    this.display = display;
    this.storage = storage;
    this.memory = {
      ram: ram,
      gpu: gpu,
    };
    this.ssd = ssd;
  }
  installssd(ssdstatus) {
    this.ssd = ssdstatus;
  }
  extraram(ramadd) {
    this.memory.ram = ramadd;
  }
}

export default Laptop;
