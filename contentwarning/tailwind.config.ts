import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "iconshiro": "url(https://64.media.tumblr.com/8056bfff51dcc3f18388039aab78e460/6e6ab721205d3e84-a2/s2048x3072/038ac6b1b541bb2f7fd197a76fa9e2bc80f06ca1.pnj)",
        "iconkuro": "url(https://64.media.tumblr.com/9366f0a5e5f0b10340250da27416617d/6e6ab721205d3e84-a7/s2048x3072/800e2d4139409f1cf720401cb154f890af9ab7fd.jpg)",
        "white": "url('/assets/images/1.png')",
      },
      colors: {
        'minty': '#76ABAE',
        'shiro': '#F6F5F2',
        'noir': '#373A40',
        'lefu': '#31363F',
      },
    },
  },
  plugins: [],
};

export default config;
//company: "url(/images/banners/company@2x.jpg)",
//./assets/images/bg_2.png
/*
 extend: {
      clipPath: {
        'left-triangle': 'polygon(0 0, 100% 0, 0 100%)',
      },
*/