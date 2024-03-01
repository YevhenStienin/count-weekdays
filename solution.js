/**
 *
 * @param {Date} startDate - start date of range
 * @param {Fate} endDate - end date of range, it is also included in range
 * @param {number} weekdayToFind - 0 to 6, where 0 is Sunday
 * @returns
 */
const countWeekdayOccurrences = (startDate, endDate, weekdayToFind) => {
  const daysInRange =
    Math.floor((endDate - startDate) / (1000 * 3600 * 24)) + 1; // +1 just to also include endDate day into the range
  const startDayOfWeek = startDate.getDay();

  // if the range contains single one day, can just check if this is the day we're looking for
  if (daysInRange === 1) {
    return +(startDayOfWeek === weekdayToFind);
  }

  // how much full weeks  are in the range
  let weeks = Math.floor(daysInRange / 7);
  const restDays = daysInRange % 7;

  // it there are remaining days after full weeks
  // and weekday, we're looking for, falls within the range of remaining days in the incomplete week
  // taking into account possible carryover to the next week
  if (
    restDays &&
    weekdayToFind >= startDayOfWeek &&
    (weekdayToFind <= startDayOfWeek + restDays || weekdayToFind < restDays)
  ) {
    weeks++;
  }

  return weeks;
};

module.exports = countWeekdayOccurrences;
