export function formatDateRange(startDate: Date, endDate: Date) {
  // Define options for month abbreviation and year with correct type
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
  };

  // Format both dates using Intl.DateTimeFormat
  const start = new Intl.DateTimeFormat("en-US", options).format(startDate);
  const end = new Intl.DateTimeFormat("en-US", options).format(endDate);

  // Return formatted date range
  return `${start} - ${end}`;
}
