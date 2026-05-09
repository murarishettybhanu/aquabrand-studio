#!/usr/bin/env node

/**
 * Generates a static index.html for GitHub Pages deployment.
 * TanStack Start is an SSR framework — it doesn't produce an index.html.
 * This script creates one from the built client assets so the SPA
 * can boot on a static host like GitHub Pages.
 */

import { readdirSync, writeFileSync, copyFileSync } from "fs";
import { join } from "path";

const clientDir = join(process.cwd(), "dist", "client");
const assetsDir = join(clientDir, "assets");

const files = readdirSync(assetsDir);
const cssFiles = files.filter((f) => f.endsWith(".css"));
const jsFiles = files.filter((f) => f.endsWith(".js"));

// Entry JS is usually the smaller one (the bootstrap), vendor is the larger chunk.
// Sort ascending by name to get a predictable order.
jsFiles.sort();

const base = process.env.BASE_PATH || "/aquabrand-studio/";

const cssLinks = cssFiles
  .map((f) => `    <link rel="stylesheet" href="${base}assets/${f}" />`)
  .join("\n");

const jsScripts = jsFiles
  .map((f) => `    <script type="module" src="${base}assets/${f}"></script>`)
  .join("\n");

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Aqualume — Custom Bottled Water & Private Label</title>
    <meta name="description" content="Premium custom-branded water for events, weddings, and private label retail. 100% recyclable glass and PET. Get a quote in 24 hours." />
    <meta name="author" content="Aqualume" />
    <meta property="og:title" content="Aqualume — Custom Bottled Water & Private Label" />
    <meta property="og:description" content="Premium custom-branded water for events, weddings, and private label retail. 100% recyclable." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
${cssLinks}
  </head>
  <body>
    <div id="root"></div>
${jsScripts}
  </body>
</html>
`;

writeFileSync(join(clientDir, "index.html"), html);
// Copy as 404.html for SPA client-side routing
writeFileSync(join(clientDir, "404.html"), html);

console.log("✅ Generated index.html and 404.html in dist/client/");
console.log(`   CSS: ${cssFiles.join(", ")}`);
console.log(`   JS:  ${jsFiles.join(", ")}`);
