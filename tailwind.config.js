/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nanum: ['Nanum Gothic', 'sans-serif'], // 사용자 정의 폰트 추가
      },
    },
  },
  plugins: [],
}