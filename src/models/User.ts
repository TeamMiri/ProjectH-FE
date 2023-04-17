export interface User {
  name: string;
  email: string;
  userId: string;
  profileImageUrl: string;
  techSpec: string[];
  age: number;
  gender: number;
  contactNumber: string;
  location: string;
  introduction: string;
  pdfFile: File | null;
}
//사용자 기본 프로필 정보
//사용자가 변경할 수 있는 정보

export interface JWTUserInfo extends User {
  token: string;
  exp: number;
}

export const defaultUserInfo: User = {
  name: 'default',
  email: 'default@default.com',
  userId: '111111111111111111111',
  profileImageUrl:
    'https://lh3.googleusercontent.com/a/AGNmyxZVJ5hIY1GMZw0H8kMaGAQcA3cC8kkA3mYVChPwSA=s96-c',
  introduction:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a gravida nunc. Proin erat tortor, interdum id venenatis sit amet, convallis eget sapien. Integer nisi turpis, convallis quis purus et, vehicula tempus diam. Ut et neque nulla. Ut posuere lacinia est, ac facilisis velit fermentum aliquam. Ut vulputate consectetur nibh, eget mollis magna fringilla vel. Ut sit amet bibendum nibh. Nulla at urna imperdiet felis accumsan condimentum. Phasellus vel lobortis urna. Duis arcu felis, interdum sed urna vel, posuere auctor nulla. Etiam rutrum urna id felis ultricies pulvinar. Fusce eleifend ex et egestas rhoncus. Praesent tempus metus vitae turpis facilisis, vel vulputate nisi ultricies. Etiam ut mauris urna. Integer nec dolor sed nulla rutrum hendrerit. Etiam pellentesque neque ut diam auctor dictum.',
  techSpec: ['JavaScript'],
  location: 'o',
  age: -1,
  gender: 0,
  contactNumber: '01012341234',
  pdfFile: null,
};
