describe("Year", function() {

  var years = {
    3: "common",
    5: "common",
    4: "leap",
    104: "leap",
    100: "common",
    500: "common",
    400: "leap",
    3200: "leap",
    2016: "leap",
  };

  for (key in years) {
      it(key + ": " + years[key], function() {
        expect(isLeapYear(key)).toEqual(years[key])
      })
  };



});
