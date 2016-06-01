function isLeapYear(yr) {

  var num = 4;

  switch (true) {
    case (yr % num !== 0):
    case (yr % num*100 !== 0):
      return "common";
      break;
    default :
      return "leap";
  }
}

