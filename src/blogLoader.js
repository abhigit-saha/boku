// Vite glob import — all .md files are transformed by our vite plugin into JS modules
const blogModules = import.meta.glob("/src/content/blogs/*.md", {
  eager: true,
  import: "default",
});

export function getAllPosts() {
  const posts = Object.values(blogModules).map((mod) => {
    const fm = mod.frontmatter || {};
    const content = mod.content || "";
    const slug = mod.slug || "untitled";

    return {
      slug,
      title: fm.title || slug,
      date: fm.date || "",
      excerpt:
        fm.excerpt ||
        content
          .slice(0, 140)
          .replace(/[#*\n]/g, " ")
          .trim() + "...",
      tags: Array.isArray(fm.tags) ? fm.tags : [],
      content,
    };
  });

  // Sort by date descending
  posts.sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date) - new Date(a.date);
  });

  return posts;
}
