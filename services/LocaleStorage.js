export function removeItem() {}
removeItem.getInitialProps = async ({ req }, itemToRemove) => {
  if (req) {
    return { page: {} };
  } else {
    window.localStorage.removeItem(itemToRemove);
  }
};

export function getItem() {}
getItem.getInitialProps = async ({ req }, item) => {
  if (req) {
    return { page: {} };
  } else {
    return window.localStorage.getItem(item);
  }
};

export function addItem() {}
addItem.getInitialProps = async ({ req }, localeStorageName, newItem) => {
  if (req) {
    return { page: {} };
  } else {
    window.localStorage.setItem(localeStorageName, newItem);
  }
};
