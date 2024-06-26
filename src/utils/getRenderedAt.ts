export const getRenderedAt = () => {
  const date = new Date();

  const day = date.getDate();
  const month = date.toLocaleDateString("en-US", { month: "long" });

  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const dayWithOrdinal = getDayWithOrdinalSuffix(day);

  return `${dayWithOrdinal} of ${month} at ${time}`;
};

const getDayWithOrdinalSuffix = (day: number) => {
  const suffixes = ["th", "st", "nd", "rd"];
  const relevantDigits = day > 3 && day < 21 ? 0 : day % 10;
  const suffix = suffixes[relevantDigits] || suffixes[0];
  return `${day}${suffix}`;
};
