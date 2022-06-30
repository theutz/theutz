import fs from "fs";
import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import { homedir } from "os";
import { resolve } from "path";

let host = "theutz.test";

export default defineConfig({
    plugins: [
        laravel(["resources/css/app.css", "resources/js/app.js"]),
        {
            name: "blade",
            handleHotUpdate({ file, server }) {
                if (file.endsWith(".blade.php")) {
                    server.ws.send({
                        type: "full-reload",
                        path: "*",
                    });
                }
            },
        },
    ],
    server: detectServerConfig(host),
});

function detectServerConfig(host) {
    let keyPath = resolve(homedir(), `.config/valet/certificates/${host}.key`);
    let crtPath = resolve(homedir(), `.config/valet/certificates/${host}.crt`);

    if (!fs.existsSync(keyPath)) return {};
    if (!fs.existsSync(crtPath)) return {};

    return {
        hmr: { host },
        host,
        https: {
            key: fs.readFileSync(keyPath),
            cert: fs.readFileSync(crtPath),
        },
    };
}
