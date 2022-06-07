export const toMinutesAndSeconds = (duration: number) => {
  const minutes: number = Math.floor(duration / 60_000);
  const seconds: string = ((duration % 60_000) / 1000).toFixed(0);
  return `${minutes}:${seconds}`;
};
