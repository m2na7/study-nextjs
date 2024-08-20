// Material-tailwind-library는 클라이언트에서 동작해야함
// layout.tsx는 기본적으로 서버 컴포넌트이기 때문에 ThemeProvider 설정을 해줘야함
"use client";

export { ThemeProvider } from "@material-tailwind/react";
