export const dayHoursDifference = (utcTime: string | undefined) => {
  if (utcTime === undefined) return { diffDays: "", diffHours: "" };

  const utcTimestamp = Date.parse(utcTime);
  const currentTimestamp = new Date().getTime();
  const timeDiff = currentTimestamp - utcTimestamp;

  const diffDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  const diffHours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  return { diffDays, diffHours };
};
