console.log('#13. JavaScript homework example file')

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/.test(email);
}

function isValidUrl(url) {
  return /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:[\w-]+\.)+[a-z]{2,}(?::\d{1,5})?(?:\/[^\s]*)?$/i.test(url);
}

export { isValidEmail, isValidUrl }
