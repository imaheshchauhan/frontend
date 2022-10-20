console.log("Hello World");

let name = "Mahesh";
var age = 14;
const test = true;

let priorities = ["Error","Warning","debug"]

const forfunction = (item) => {
    console.log(item)
}

priorities.forEach((item) => {
    console.log(item)
}) 


console.log(name);

let titleElement = document.getElementById('title')
let titleQuerySelector = document.querySelector("#title")
console.log(titleElement);

titleElement.addEventListener("click", () => {
    console.log("aa gaya")
})