describe("Year", function() {

  var years = {
    3: "common",
    5: "common",
    4: "leap",
    104: "leap",
    100: "leap",
    500: "leap",
    400: "leap",
    3200: "leap",
    2016: "leap",
    "cake": "not a year",
  };
  jQuery.each(years, function (key, val) {
      it(key + ": " + years[key], function() {
        expect(isLeapYear(key)).toEqual(years[key])
      })
  });


});
