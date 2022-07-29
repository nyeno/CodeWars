function disemvowel(str) {
  let regex = /[aeiou]/gi
  return str.replace(regex, "");
}
