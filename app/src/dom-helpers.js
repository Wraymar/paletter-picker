import { removePaletteById } from "./local-storage";

export const renderPalette = (paletteDivUl, paletteObj) => {
  const myPalette = paletteObj;

  //title
  const h3 = document.createElement("h3");
  h3.textContent = myPalette.title;

  //Create a color Div that holds the preview and button
  const createColorDiv = (color) => {
    const colorDiv = document.createElement("div");
    colorDiv.className = "colorDiv";

    const copyBtn = document.createElement("button");
    copyBtn.id = "copyBtn";
    copyBtn.textContent = `${color} copy`;

    const previewDiv = document.createElement("div");
    previewDiv.className = "previewDiv";

    const textP = document.createElement("p");
    textP.style.background = color;
    textP.textContent = "Text Example";

    previewDiv.append(textP);
    colorDiv.append(previewDiv, copyBtn);

    return colorDiv;
  };

  //colorsDiv that holds the individual divs
  const colorsContainer = document.createElement("div");
  colorsContainer.classList.add("colors-container");

  //for each color create the color divs
  const paletteColors = myPalette.colors;
  // console.log(`id: ${myPalette.uuid} ${paletteColors}`);
  paletteColors.forEach((color) => {
    colorsContainer.append(createColorDiv(color));
  });

  //delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete palette";
  deleteBtn.className = "delete-btn";
  //listen for a click event on the delete button and then remove the palette from the local storage
  deleteBtn.addEventListener("click", () => {
    //removes the palette from the local storage
    removePaletteById(myPalette.uuid);
    //removes the palette from the dom
    document.getElementById(myPalette.uuid).remove();
  });

  //temperature
  const temperatureP = document.createElement("p");
  temperatureP.textContent = myPalette.temperature;

  const li = document.createElement("li");
  li.className = "palette";
  //li now has the same id as the palette.id/uuid
  li.id = myPalette.uuid;

  li.append(h3, colorsContainer, deleteBtn, temperatureP);
  paletteDivUl.appendChild(li);

  //CLIPBOARD API
  //copy the color to the clipboard
  //selct all the copy buttons
  const copyBtns = document.querySelectorAll("#copyBtn");
  copyBtns.forEach((btn) => {
    //listen for a click event on the copy button
    btn.addEventListener("click", async (e) => {
      //if clipboard API not available
      if (!navigator.clipboard) {
        console.log("Clipboard API not available");
        return;
      }
      try {
        //the text inside the button
        const copyBtntext = btn.innerText;
        //instead of '#c92929 copy' we only want the hex value '#c92929 so we slice
        await navigator.clipboard.writeText(e.target.innerText.slice(0, 7));
        //change the text of the button to copied for a second
        e.target.textContent = "copied!";
        console.log();
        //after a second change the text back to the original
        setTimeout(() => {
          e.target.textContent = copyBtntext;
        }, 1000);
        //if there's an error then we log the error
      } catch (err) {
        console.error("Failed to copy!", err);
      }
    });
  });
};
