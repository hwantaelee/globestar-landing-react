# 개요

React + Vite + TypeScript 환경의 템플릿 프로젝트

# 적용 사항

## tailwindcss

- 컴포넌트의 스타일은 tailwindcss를 이용해 설정합니다.

1. vite.config.js에 tailwindcss를 등록합니다.

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
})

```

2. index.css 파일에 tailwindcss 임포트 및 커스텀 설정내용을 작성합니다.

```
@import "tailwindcss"; // tailwindcss 임포트

@theme {
  --color-primary: #AA52BE;
}
```

## cn

- tailwind 사용시 className 충돌 방지를 위해 사용했습니다.

## react router

- 편한 라우팅을 위해 적용했습니다.

## Zustand

- 전역상태는 zustand 라이브러리를 사용합니다.
- 영구적 유지를 원하는 상태는 persist를 사용합니다.

## axios

- 통신은 axios 라이브러리를 사용합니다.
- src/api 폴더에 코드를 작성합니다.

1. axios.ts는 api요청 객체와 인터셉터를 정의합니다.
2. request.ts는 요청전용 wrapper를 만들어 요청 함수를 보다 간단하게 호출할 수 있도록 도와줍니다.
3. 사용법은 auth.ts를 참고하면 됩니다.

## env helper

- 환경변수를 간편하게 사용하기위해 작성했습니다.
