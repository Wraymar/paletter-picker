// Tip: Import the palettes object from palettes.json so that you can use them in `initPalettesIfEmpty`
import startPalettes from "./palettes.json";

// We've given these to you for free! Use them in the helpers below
const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

//this function will get the value from the local storage
const getLocalStorageKey = (key) => {
  try {
    const storedValue = localStorage.getItem(key);
    return JSON.parse(storedValue);
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Replace whatever palettes are saved in `localStorage` with the provided object of `newPalettes`
const setPalettes = (newPalettes) => {
  setLocalStorageKey("palettes", newPalettes);
};
// Tip: Only export the functions below. They will form your "data layer API". Do not give the rest of your program access to the functions above, thus limiting the scope of how your application will interact with localStorage.

// Always return an object, either full of palettes or empty. If it always returns an object, it will make the code that uses this function simpler.
export const getPalettes = () => {
  const palettes = getLocalStorageKey("palettes");
  return palettes || {};
};

// If you don't have any palettes on page load, then you should add the default palettes to localStorage. *To be clear, that's on page load, not immediately following the event that they delete all of the palettes*. So if the user deletes each palette, only if they refresh the page, the defaults will appear
export const initPalettesIfEmpty = () => {
  const storedPalettes = getPalettes();
  if (!storedPalettes || Object.keys(storedPalettes).length === 0) {
    setPalettes(startPalettes);
  }
};

// Add the palette to your saved localStorage palettes. First retrieve the existing palettes, add the new palette to the object, and then set the palettes again.
export const addPalette = (newPalette) => {
  const storedPalettes = getPalettes(); //the current palettes

  //add the new palette to the stored palettes, the key is the uuid of the palette
  storedPalettes[newPalette.uuid] = newPalette;
  setPalettes(storedPalettes); //updating the local storage
};

// Remove the palette from your saved localStorage palettes as found by the palette's `uuid`. First retrieve the existing palettes, find and remove the specified palette from the object, and then set the palettes again.
export const removePaletteById = (uuid) => {
  //delete the palette from local storage
  const palettes = getPalettes();

  //deleet the palette from the palettes object
  delete palettes[uuid]; //delete keyword for objects

  //after we deleted the palette from the getPalettes() we now have to setPalettes to update the local storage
  setPalettes(palettes);
};

// Remember these functions are all *only* the data layer of our project. That is, they should only handle creating, reading, updating, and deleting data from local storage (CRUD). None of them should be touching the DOM, that's the job of your dom-helper functions. For example, `removePalette()` should only remove the palette from the localStorage object, do not try to remove it from the DOM in this function.
