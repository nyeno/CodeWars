function splitAndMerge(string, separator) {
  var first = string.split(" ")
  var second = first.map((x) => x.split("").join(separator))
  return second.join(" ")
}
