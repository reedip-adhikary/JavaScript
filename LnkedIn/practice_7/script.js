/**
 * A standard function
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

const student = {
  name: "Reedip Adhikary",
  age: 21,
  dob: "02 September 1999",
  job: "Web Developer",
  projectNum: 4,
  school: "Caeser School",
  clg: "Jain University",
};

// const addPack = function (currentPack) {
//   const newArticle = document.createElement("article");
//   newArticle.innerHTML = `
//     <h1>${currentPack.name}</h1>
//     <ul>
//       <li>Job Description: ${currentPack.job}</li>
//       <li>Date of Birth: ${currentPack.dob}</li>
//       <li>Age: ${currentPack.age}</li>
//       <li>School: ${currentPack.school}</li>
//       <li>College: ${currentPack.clg}</li>
//     </ul>
//   `;
//   return newArticle;
// };

//or

//arrow function sysntax
const addPack = (currentPack) => {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
    <h1>${currentPack.name}</h1>
    <ul>
      <li>Job Description: ${currentPack.job}</li>
      <li>Date of Birth: ${currentPack.dob}</li>
      <li>Age: ${currentPack.age}</li>
      <li>School: ${currentPack.school}</li>
      <li>College: ${currentPack.clg}</li>
    </ul>
  `;
  return newArticle;
};

const main = document.querySelector("main");
main.append(addPack(student));
