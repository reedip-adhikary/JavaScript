// object destructuring

const band = {
    bandName: "linkin park",
    famousSong: "In the end",
    year: 1995,
    lead: "Chester Bannington"
};

// const bandName = band.bandName;
// const famousSong = band.famousSong;

// console.log(bandName);
// console.log(famousSong);

// let { bandName, famousSong, lead } = band; // variable name has to be same as key name
// value will be assigned based on the variable name

// let { bandName, famousSong: bestSong, lead } = band; // to change variable name
// console.log(bestSong) // famousSong won't work

let { bandName, famousSong, ...rest } = band; // to create obj from remaining
console.log(rest)