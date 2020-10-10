export function setItem(_key, data) {
  try {
    const item = JSON.stringify(data);
    localStorage.setItem(_key, item);
    return item;
  } catch (error) {
    console.error(error);
  }
}

export function getItem(_key) {
  try {
    const item = localStorage.getItem(_key);
    return JSON.parse(item);
  } catch (error) {
    console.error(error);
    return false;
  }
}

export function removeItem(_key) {
  try {
    localStorage.removeItem(_key);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
