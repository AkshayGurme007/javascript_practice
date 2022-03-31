//--------DOM----------------------
// const heading = document.getElementsByTagName("h1");
// console.log(heading[1].innerText);

// const heading2 = document.getElementsByClassName("hi");
// console.log(heading2[0].innerText);

//array of objects

// let data = document.getElementById("main").innerText;
// let data2 = document.getElementById("main").innerHTML;
// console.log(data);
// console.log(data2);

// function submit() {
//   const value = document.getElementById("main");
//   value.innerText = "marn stack";
// }

function submit() {
  const userInput = document.getElementById("name");
  const todo = document.createElement("h1");
  todo.innerText = userInput.value;
  todo.setAttribute("class", "todoDiv");
  document.getElementById("todoData").appendChild(todo);
}

//adding dynamic html
//create an empty div tag and giv it some id.
//capyure the input filed value
//create the element that you want to add in html
//append the element inside the empty div tag
