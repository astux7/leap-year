function isLeapYear(yr) {
  var year = +yr;

  if(typeof year !== typeof NaN || isNaN(year)) {
    return "not a year";
  }
  return (year % 4 == "") ? "leap" : "common";
}

