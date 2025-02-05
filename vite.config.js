import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
export default defineConfig({
  base: "/weather-app-vite/", // Change back to this
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";

// export default defineConfig({
//   base: "./",
//   plugins: [react()],
//   build: {
//     outDir: "dist",
//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           if (id.includes("node_modules")) {
//             return "vendor";
//           }
//         },
//       },
//     },
//   },
//   // Add this to handle external scripts
//   optimizeDeps: {
//     include: ["leaflet"],
//   },
//   // Add this to resolve potential MIME type issues
//   server: {
//     fs: {
//       allow: [".."],
//     },
//   },
// });
