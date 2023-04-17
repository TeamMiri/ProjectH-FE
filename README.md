# ProjectH - 당신의 프로필을 작성하고 프로젝트를 생성하세요.

- developed by baldwinIV

### 프론트엔드 서버 빌드하기

```bash
npm install
# or
yarn install
```

```bash
npm run dev
# or
yarn dev

# to build production
yarn build
yarn start
```

### 환경변수

```text
NEXT_PUBLIC_CLIENT_ID={구글 oauth 클라이언트 id}
NEXT_PUBLIC_CLIENT_SECRET={구글 oauth 클라이언트 시크릿}
NEXT_PUBLIC_REDIRECT_URI_OAUTH={구글 oauth 리다이렉트 uri}
NEXT_PUBLIC_JWT_SECRET={자체 백엔드 서버 jwt 시크릿}
```
