function invokedAfterDelay(callback) {
  setTimeout(callback, 2000);
}

function displayMessage() {
  console.log("Hello");
}
invokedAfterDelay(displayMessage);
