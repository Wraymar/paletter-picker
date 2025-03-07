// import "./style.css";
import { renderPalette } from "./dom-helpers.js";
import {
  initPalettesIfEmpty,
  getPalettes,
  addPalette,
} from "./local-storage.js";

//this will render the starter palettes
initPalettesIfEmpty();
//this will get the palettes from the local storage
const stored = getPalettes();
const palettesUl = document.querySelector("#palette-list");
//'Stored' is an object of objects
//Object.values will return an array of the values of the object so we can loop through them using an array method
Object.values(stored).forEach((palette) => {
  //each object will now be looped through and passed to the renderPalette function
  renderPalette(palettesUl, palette);
});

// handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;

  //creating an object of form values
  const formValues = Object.fromEntries(new FormData(form));
  // formValues.uuid = crypto.randomUUID();
  // console.log(formValues);

  //structuring the formValues object to match the starter palettes
  const myPalette = {
    uuid: crypto.randomUUID(),
    title: formValues.title,
    colors: [formValues.color1, formValues.color2, formValues.color3],
    temperature: formValues.temperature,
  };

  console.log(myPalette);

  //add palette to local storage
  addPalette(myPalette);

  //Render the Palette
  renderPalette(palettesUl, myPalette);

  //reset the form
  form.reset();
};

//Listening for a form Submission
const formButton = document.querySelector("form");
formButton.addEventListener("submit", handleSubmit);
