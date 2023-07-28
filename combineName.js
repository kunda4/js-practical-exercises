function combineNames(...string) {
  if (string.length == 1) {
    return string.join(" ");
  }
  let lastWord = string.slice(-1).toString().toUpperCase();
  let str = string.slice(0, string.length - 1).join(" ");

  return ` ${str} ${lastWord} `;
}

console.log(combineNames("anine", "anine", "anine", "aline"));
