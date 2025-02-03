// import "./style.css";
import { renderPalette } from "./dom-helpers.js";
// import {} from "./local-storage.js";

const palettesUl = document.querySelector("#palette-list");

// handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;

  //creating an object of form values
  const formValues = Object.fromEntries(new FormData(form));
  console.log(formValues);

  //Render the Palette
  renderPalette(palettesUl, formValues);

  //reset the form
  form.reset();
};

//Listening for a form Submission
const formButton = document.querySelector("form");
formButton.addEventListener("submit", handleSubmit);
