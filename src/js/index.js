import _ from "lodash";
import "../scss/style.scss";

function component() {
  let element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");
  return element;
}

document.body.appendChild(component());

const getData = async url => {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
};

getData("https://jsonplaceholder.typicode.com/posts");
