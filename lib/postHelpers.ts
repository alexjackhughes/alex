export const calculateMinutesToRead = (length: number): string => {
  const mins = Math.floor(length / 6 / 300);

  if (mins === 1) return "1 minute";
  if (mins < 1) return "Less than a minute";

  return `${mins} minutes`;
};
