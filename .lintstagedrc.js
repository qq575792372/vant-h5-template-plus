module.exports = {
  "src/**/*.{js,ts,tsx,jsx,vue}": ["pnpm lint"],
  "src/**/*.{css,less,scss}": ["prettier --write"],
  "src/**/*.{md,json}": ["prettier --write"],
};
