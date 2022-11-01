module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "add",
        "del",
        "update",
        "docs",
        "style",
        "build",
        "refactor",
        "revert",
        "test",
        "perf",
        "chore",
        "ci",
        "merge",
      ],
    ],
  },
};
