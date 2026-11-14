import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const check = args.includes("--check");
const app = resolve(root, args.find((arg) => arg !== "--check") ?? "../volt-rider-app");
const destination = resolve(root, "src/content/laza");
const files = ["legal-content.ts", "privacy-content.ts", "retention-content.ts", "legal-contact.ts"];

// Copy only the app's public legal text. Normal website builds use the committed
// copies and do not need access to the mobile app repository.
const copies = await Promise.all(files.map(async (file) => {
  const source = await readFile(resolve(app, "features/legal", file), "utf8");
  const content = source
    .replaceAll("@/features/i18n/types", "./types")
    .replaceAll("@/features/legal/legal-contact", "./legal-contact");
  if (content.includes("@/")) throw new Error(`Unsupported app import in ${file}`);
  return [file, `// Generated from volt-rider-app/features/legal/${file}.\n// Run npm run sync:legal; edit the app source instead of this copy.\n\n${content}`];
}));

if (!check) await mkdir(destination, { recursive: true });
for (const [file, content] of copies) {
  const target = resolve(destination, file);
  if (check) {
    const existing = await readFile(target, "utf8").catch((error) => {
      if (error.code === "ENOENT") return null;
      throw error;
    });
    if (existing !== content) {
      console.error(`Legal content differs from the app: ${file}`);
      process.exitCode = 1;
    }
  } else {
    await writeFile(target, content);
  }
}
if (!process.exitCode) console.log(check ? "Website legal text matches the app." : "Synced English and Amharic legal text from the app.");
