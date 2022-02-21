// inner html
const headline = document.querySelector(".headline")
console.log(headline.innerHTML)
headline.innerHTML = '<h1>Changed via JS file 20</h1>'
headline.innerHTML += '<button class="btn btnheadline">JS Button</button>'