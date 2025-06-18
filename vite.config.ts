import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
// @ts-ignore: Type mismatch due to plugin using internal Vite types
import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      // Only enable in development
      ...(mode === "development" ? [screenGraphPlugin()] : []),
    ],
    publicDir: "./static",
    base: "./",
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
  };
});
