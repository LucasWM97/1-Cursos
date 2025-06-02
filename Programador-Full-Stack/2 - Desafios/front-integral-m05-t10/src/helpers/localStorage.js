export function getLocalStorageItem(key) {
  const item = localStorage.getItem(key);

  return item;
}

export function setLocalStorageItem(key, value) {
  localStorage.setItem(key, value);
}
