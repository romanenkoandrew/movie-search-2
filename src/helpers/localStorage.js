export const getFromLS = (arrName) => {
  return JSON.parse(localStorage.getItem(arrName)) || [];
};

export const updateLS = (arrName, newArr) => {
  return localStorage.setItem(arrName, JSON.stringify(newArr));
};

export const findItemLS = (arrName, item) => {
  const arr = getFromLS(arrName);
  return arr.find((el) => el.imdbID === item.imdbID);
};

export const toggleItemInLS = (arrName, item) => {
  const arr = getFromLS(arrName);
  if (arr.find((el) => el.imdbID === item.imdbID)) {
    const newArr = arr.filter((el) => el.imdbID !== item.imdbID);
    updateLS(arrName, newArr);
  } else {
    arr.push(item);
    updateLS(arrName, arr);
  }
};
