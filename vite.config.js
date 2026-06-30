import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync } from "fs";
import { basename } from "path";

// Custom plugin to transform .md files into JS modules with parsed frontmatter
function markdownPlugin() {
  return {
    name: "vite-plugin-markdown",
    transform(code, id) {
      if (!id.endsWith(".md")) return null;

      const raw = readFileSync(id, "utf-8");

      let frontmatter = {};
      let content = raw;

      const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
      if (fmMatch) {
        const fmBlock = fmMatch[1];
        content = fmMatch[2];

        for (const line of fmBlock.split("\n")) {
          const kv = line.match(/^(\w+):\s*(.+)$/);
          if (kv) {
            let val = kv[2].trim();
            // Handle arrays like ["a", "b"]
            if (typeof val === "string" && val.startsWith("[") && val.endsWith("]")) {
              try {
                val = JSON.parse(val.replace(/'/g, '"'));
              } catch {
                // keep as string
              }
            }
            // Strip surrounding quotes (only for strings)
            if (
              typeof val === "string" &&
              ((val.startsWith('"') && val.endsWith('"')) ||
                (val.startsWith("'") && val.endsWith("'")))
            ) {
              val = val.slice(1, -1);
            }
            frontmatter[kv[1]] = val;
          }
        }
      }

      const mod = {
        frontmatter,
        content,
        slug: basename(id, ".md"),
      };

      return {
        code: `export default ${JSON.stringify(mod)};`,
        map: null,
      };
    },
  };
}

export default defineConfig({
  base: "/",
  plugins: [markdownPlugin(), react()],
});
