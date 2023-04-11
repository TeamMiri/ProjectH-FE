export interface User {
  name: string;
  email: string;
  id: string;
  pictureURL: string;
  techSpec: string[];
}

export interface JWTUserInfo extends User {
  token: string;
  exp: number;
}

export const defaultUserInfo: User = {
  name: 'default',
  email: 'default@default.com',
  id: '111111111111111111111',
  pictureURL:
    'https://lh3.googleusercontent.com/a/AGNmyxZVJ5hIY1GMZw0H8kMaGAQcA3cC8kkA3mYVChPwSA=s96-c',
  techSpec: ['testScript1', 'testScript2'],
};
