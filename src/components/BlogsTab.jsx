import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { getAllPosts } from "../blogLoader";

export default function BlogsTab() {
  const posts = getAllPosts();
  const [activeSlug, setActiveSlug] = useState(null);

  const activePost = activeSlug ? posts.find((p) => p.slug === activeSlug) : null;

  if (activePost) {
    return (
      <div>
        <button className="bios-back" onClick={() => setActiveSlug(null)}>
          ← Back to Blog List
        </button>
        <div className="bios-blog-post">
          <h1>{activePost.title}</h1>
          <div className="bios-blog-meta">
            {activePost.date}
            {activePost.tags.length > 0 && ` | ${activePost.tags.join(", ")}`}
          </div>
          <br />
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {activePost.content}
          </ReactMarkdown>
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return <div className="bios-empty">No blog posts found. Add .md files to src/content/blogs/</div>;
  }

  return (
    <div>
      <span className="bios-section">Blog Posts</span>
      <br />
      <br />
      {posts.map((post) => (
        <div
          key={post.slug}
          className="bios-blog-entry"
          onClick={() => setActiveSlug(post.slug)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setActiveSlug(post.slug)}
        >
          <div className="bios-blog-title">{post.title}</div>
          <div className="bios-blog-meta">
            {post.date}
            {post.tags.length > 0 && ` | ${post.tags.join(", ")}`}
          </div>
          <div className="bios-blog-excerpt">{post.excerpt}</div>
        </div>
      ))}
    </div>
  );
}
