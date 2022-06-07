export const toMinutesAndSeconds = (duration: number) => {
  const minutes = Math.floor(duration / 60_000);
  const seconds = ((duration % 60_000) / 1000).toFixed(0);
  return `${minutes}:${seconds}`;
};
