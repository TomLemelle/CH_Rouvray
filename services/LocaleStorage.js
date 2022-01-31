export const getFromStorage = (item) => {
  if (typeof window !== "undefined") {
    window.localStorage.getItem(item);
  }
};

export const setToStorage = (name, itemToSet) => {
  if (typeof window !== "undefined") {
    return window.localStorage.setItem(name, itemToSet);
  }
};

export const removeToStorage = (itemToRemove) => {
  if (typeof window !== "undefined") {
    console.log("cc");
    window.localStorage.removeItem(itemToRemove);
  }
  return console.log("coucou");
};
