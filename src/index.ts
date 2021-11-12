const GetScore = (
  TeamAScores: Array<number>,
  TeamBScores: Array<number>,
): string => {
  const t1 = TeamAScores.reduce((acc: number, n: number) => acc + n, 0);
  const t2 = TeamBScores.reduce((acc: number, n: number) => acc + n, 0);
  return `${t1.toString().padStart(3, '0')}:${t2.toString().padStart(3, '0')}`;
};
export { GetScore };
