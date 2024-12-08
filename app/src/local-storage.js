//LOCAL STORAGE
//set a new key
const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
