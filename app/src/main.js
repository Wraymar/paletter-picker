import "./style.css";
import {} from "./dom-helpers.js";
import {} from "./local-storage.js";

// handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;

  //creating an object of form values
  const formValues = Object.fromEntries(new FormData(form));

  //Capturing the form values
  const title = formValues.title;
  const color1 = formValues.color1;
  const color2 = formValues.color2;
  const color3 = formValues.color3;
  const temperature = formValues.temperature;

  //reset the form
  form.reset();
};

//Listening for a form Submission
const formButton = document.querySelector("form");
formButton.addEventListener("submit", handleSubmit);
