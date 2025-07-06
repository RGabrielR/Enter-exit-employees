const now = new Date();
export const selectedTimestampFormat = (selectedDate) => selectedDate ? new Date(selectedDate) : now;
