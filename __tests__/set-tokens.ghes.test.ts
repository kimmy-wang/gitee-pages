import {setPersonalToken, setGiteeToken} from '../src/set-tokens';

const OLD_ENV = process.env;

beforeEach(() => {
  jest.resetModules();
  process.env = {...OLD_ENV};
});

afterAll(() => {
  process.env = OLD_ENV; // Restore old environment
});

describe('setGiteeToken()', () => {
  test('return remote url with GITEE_TOKEN gh-pages', () => {
    process.env.GITEE_SERVER_URL = 'https://github.enterprise.server';
    const expected = 'https://x-access-token:GITEE_TOKEN@github.enterprise.server/owner/repo.git';
    const test = setGiteeToken(
      'x-access-token',
      'GITEE_TOKEN',
      'owner/repo',
      'gh-pages',
      '',
      'refs/heads/master',
      'push'
    );
    expect(test).toMatch(expected);
  });
});

describe('setPersonalToken()', () => {
  test('return remote url with personal access token', () => {
    process.env.GITEE_SERVER_URL = 'https://github.enterprise.server';
    const expected = 'https://x-access-token:pat@github.enterprise.server/owner/repo.git';
    const test = setPersonalToken('x-access-token', 'pat', 'owner/repo');
    expect(test).toMatch(expected);
  });
});
