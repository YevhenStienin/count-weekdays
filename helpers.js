const toHumanWeekdayName = (weekday, amount) => {
  if (0 > weekday > 6) {
    throw new Error("Invalid argument.");
  }

  const format = new Intl.DateTimeFormat("en-GB", { weekday: "long" }).format;
  const weekdayNames = [...Array(7).keys()].map(
    (day) => format(new Date(Date.UTC(2024, 0, day))) // Jan 2024 is a month that begins with a Monday
  );

  return `${weekdayNames[weekday]}${amount !== 1 ? "s" : ""}`;
};

module.exports = { toHumanWeekdayName };
