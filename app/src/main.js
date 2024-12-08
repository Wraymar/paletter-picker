import "./style.css";

// handle submit
const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const formValues = Object.fromEntries(new FormData(form));
  console.log(formValues);
  console.log(form);
};

const formButton = document.querySelector("form");
formButton.addEventListener("submit", handleSubmit);

//LOCAL STORAGE
//set a new key
const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
