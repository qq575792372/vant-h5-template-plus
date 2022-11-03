/**
 * lint-staged 校验暂存区的文件
 */
module.exports = {
  "src/**/*.{js,ts,tsx,jsx,vue}": ["pnpm lint:fix", "prettier --write"],
  "src/**/*.{css,less,scss}": ["prettier --write"],
  "src/**/*.{md,json}": ["prettier --write"],
};
