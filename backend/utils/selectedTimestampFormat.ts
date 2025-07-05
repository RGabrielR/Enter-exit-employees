const now = new Date();
export const selectedTimestampFormat = (selectedDate?: Date) =>
  selectedDate ? new Date(selectedDate) : now;