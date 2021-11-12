import { GetScore } from './index';
describe('test', () => {
  test('When Team B scores 2 points, score is "000:002"', async () => {
    const teamA = [0];
    const teamB = [2];
    const result = GetScore(teamA, teamB);
    expect(result).toEqual('000:002');
  });
  test('When no team has scored, should reteutn 000:000', async () => {
    const teamA = [0];
    const teamB = [0];
    const result = GetScore(teamA, teamB);
    expect(result).toEqual('000:000');
  });
  test('When Team A scores 1 point, score is "001:000"', async () => {
    const teamA = [1];
    const teamB = [0];
    const result = GetScore(teamA, teamB);
    expect(result).toEqual('001:000');
  });
});
