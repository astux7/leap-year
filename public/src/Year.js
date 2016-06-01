function isLeapYear(yr) {
  switch (true) {
    case (yr % 4 !== 0):
      return "common";
      break;
    case (yr % 100 !== 0):
      return "leap";
      break;
    case (yr % 400 !== 0):
      return "common";
      break;
    default :
      return "leap";
  }
}

