import { defineConfig } from "vitest/config";
export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true, // for not using iv from vitest
    setupFiles: "tests/setup.ts",
  },
});
