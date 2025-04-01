import {reactRouter} from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import {defineConfig} from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import * as path from "node:path";

export default defineConfig({
    plugins: [tailwindcss(), reactRouter(), svgr(), tsconfigPaths()],
    resolve: {
        // 别名配置
        alias: {
            '@assets': path.join(__dirname, 'src/assets')
        }
    },
    assetsInclude: ["**/*.svg"],
});
