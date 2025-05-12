import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path"; // ⬅️ Import path module

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // ⬅️ Add this line
    },
  },
  // server: {
  //   host: "0.0.0.0", // ⬅️ Allow external access
  //   port: 5173,
  //   allowedHosts: [
  //     "866c-2409-40d2-47-7c4e-f1f1-aead-40ef-bdbb.ngrok-free.app" // ⬅️ Replace with your actual ngrok host
  //   ]
  // }
});
