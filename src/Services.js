export function getFromLocal(name) {
  try {
    return JSON.parse(localStorage.getItem(name));
  } catch (error) {
    console.log(error);
  }
}

export function setToLocal(name) {
  localStorage.setItem(name);
}
