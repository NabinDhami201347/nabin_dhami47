export function formatDate(inputDate?: Date): string {
  const dateToFormat = inputDate || new Date();

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  return formatter.format(dateToFormat);
}
