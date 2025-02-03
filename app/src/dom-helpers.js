export const renderPalette = (paletteDivUl, paletteObj) => {
  // paletteDivUl.innerHTML = "";

  const myPalette = {
    title: paletteObj.title,
    colors: [paletteObj.color1, paletteObj.color2, paletteObj.color3],
    temperature: paletteObj.temperature,
  };

  //title
  const h3 = document.createElement("h3");
  h3.textContent = myPalette.title;

  //Create a color Div that holds the preview and button
  const createColorDiv = (color) => {
    const colorDiv = document.createElement("div");
    colorDiv.className = "colorDiv";
    colorDiv.textContent = color;

    const previewDiv = document.createElement("div");
    previewDiv.className = "previewDiv";

    const textP = document.createElement("p");
    textP.style.background = color;
    textP.textContent = "Text Example";

    previewDiv.append(textP);
    colorDiv.append(previewDiv);

    return colorDiv;
  };

  //colorsDiv that holds the individual divs
  const colorsContainer = document.createElement("div");
  colorsContainer.classList.add("colors-container");

  //for each color create the color divs
  const paletteColors = myPalette.colors;
  paletteColors.forEach((color) => {
    colorsContainer.append(createColorDiv(color));
  });

  //delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete palette";
  deleteBtn.className = "delete-btn";

  //temperature
  const temperatureP = document.createElement("p");
  temperatureP.textContent = myPalette.temperature;

  const li = document.createElement("li");
  li.className = "palette";

  li.append(h3, colorsContainer, deleteBtn, temperatureP);
  paletteDivUl.appendChild(li);
};
