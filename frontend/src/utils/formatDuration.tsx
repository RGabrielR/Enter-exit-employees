export const formatDuration = (start: string) => {
  const startDate = new Date(start);
  const diff = Date.now() - startDate.getTime();
  const hours = Math.floor(diff / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return `${hours}h ${minutes}m ${seconds}s`;
};
