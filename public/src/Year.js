function isLeapYear(yr) {

  switch (true) {
    case (yr % 4 !== 0):
    case (yr % 400 !== 0):
      return "common";
      break;
    default :
      return "leap";
  }
}

