const countWeekdayOccurrences = require("./solution");
const toHumanWeekdayName = require("./helpers").toHumanWeekdayName;

const testCases = [
  {
    startDate: new Date("2024-02-01"),
    endDate: new Date("2024-02-29"),
    weekday: 4,
    expectedResult: 5,
  },
  {
    startDate: new Date("2024-02-21"),
    endDate: new Date("2024-02-24"),
    weekday: 4,
    expectedResult: 1,
  },
  {
    startDate: new Date("2024-02-16"),
    endDate: new Date("2024-02-21"),
    weekday: 4,
    expectedResult: 0,
  },
  {
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-03-31"),
    weekday: 4,
    expectedResult: 4,
  },
  {
    startDate: new Date("2024-02-01"),
    endDate: new Date("2024-03-31"),
    weekday: 4,
    expectedResult: 9,
  },
  {
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-03-07"),
    weekday: 4,
    expectedResult: 1,
  },
  {
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-03-06"),
    weekday: 4,
    expectedResult: 0,
  },
  {
    startDate: new Date("2024-03-05"),
    endDate: new Date("2024-03-10"),
    weekday: 1,
    expectedResult: 0,
  },
  {
    startDate: new Date("2024-03-03"),
    endDate: new Date("2024-03-23"),
    weekday: 0,
    expectedResult: 3,
  },
  {
    startDate: new Date("2024-03-04"),
    endDate: new Date("2024-03-04"),
    weekday: 1,
    expectedResult: 1,
  },
  {
    startDate: new Date("2024-03-05"),
    endDate: new Date("2024-03-05"),
    weekday: 1,
    expectedResult: 0,
  },
  {
    startDate: new Date("2024-03-02"),
    endDate: new Date("2024-03-07"),
    weekday: 5,
    expectedResult: 0,
  },
  {
    startDate: new Date("2024-03-02"),
    endDate: new Date("2024-03-14"),
    weekday: 5,
    expectedResult: 1,
  },
  {
    startDate: new Date("2024-03-02"),
    endDate: new Date("2024-03-21"),
    weekday: 5,
    expectedResult: 2,
  },
];

testCases.forEach(({ startDate, endDate, weekday, expectedResult }) => {
  const testName = `should return ${expectedResult} ${toHumanWeekdayName(
    weekday,
    expectedResult
  )} between ${startDate.toLocaleDateString()} and ${endDate.toLocaleDateString()}`;

  test(testName, () => {
    expect(countWeekdayOccurrences(startDate, endDate, weekday)).toBe(
      expectedResult
    );
  });
});
