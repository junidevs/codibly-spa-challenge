import { fileURLToPath } from "node:url"
import legacy from "@vitejs/plugin-legacy"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  resolve: {
    alias: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
