"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Save, Eye, Upload, X, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [preview, setPreview] = useState(false);
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    content: "",
    category: "",
    tags: "",
    readingTime: "",
    published: false,
  });

  const [error, setError] = useState("");

  useEffect(() => {
    fetchBlog();
  }, [params.id]);

  const fetchBlog = async () => {
    setFetching(true);
    try {
      const { data: blog, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("id", params.id)
        .single();

      if (error) throw error;

      setFormData({
        title: blog.title,
        slug: blog.slug,
        description: blog.description,
        content: blog.content,
        category: blog.category || "",
        tags: blog.tags?.join(", ") || "",
        readingTime: blog.reading_time || "",
        published: blog.published,
      });
      setCoverImage(blog.cover_image_url);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setFetching(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("blog-images")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from("blog-images")
        .getPublicUrl(filePath);

      setCoverImage(data.publicUrl);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setUploading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData({ ...formData, title, slug: generateSlug(title) });
  };

  const handleSubmit = async (publish = false) => {
    setLoading(true);
    setError("");

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) throw new Error("Not authenticated");

      const { error } = await supabase
        .from("blogs")
        .update({
          title: formData.title,
          slug: formData.slug,
          description: formData.description,
          content: formData.content,
          category: formData.category,
          tags: formData.tags.split(",").map((tag) => tag.trim()),
          reading_time: formData.readingTime,
          cover_image_url: coverImage,
          published: publish,
          published_at: publish && !formData.published ? new Date().toISOString() : formData.published_at,
          updated_at: new Date().toISOString(),
        })
        .eq("id", params.id);

      if (error) throw error;

      router.push("/admin");
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="min-h-screen py-24 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-4xl font-bold mb-2">Edit Blog</h1>
              <p className="text-muted-foreground">Update your content</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setPreview(!preview)}
              className="flex items-center gap-2 px-6 py-3 border rounded-lg hover:bg-muted transition-all"
            >
              <Eye className="w-5 h-5" />
              {preview ? "Edit" : "Preview"}
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-destructive/10 text-destructive px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {!preview ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="bg-card border rounded-xl p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Cover Image</label>
                <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                  {coverImage ? (
                    <div className="relative">
                      <img
                        src={coverImage}
                        alt="Cover"
                        className="max-h-64 mx-auto rounded-lg"
                      />
                      <button
                        onClick={() => setCoverImage(null)}
                        className="absolute top-2 right-2 p-2 bg-destructive text-destructive-foreground rounded-full hover:bg-destructive/90 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div>
                      <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                      <p className="text-sm text-muted-foreground mb-4">
                        Upload a cover image
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        disabled={uploading}
                        className="hidden"
                        id="cover-upload"
                      />
                      <label
                        htmlFor="cover-upload"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg cursor-pointer hover:bg-primary/90 transition-colors disabled:opacity-50"
                      >
                        {uploading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Uploading...
                          </>
                        ) : (
                          "Choose File"
                        )}
                      </label>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-2">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={formData.title}
                  onChange={handleTitleChange}
                  className="w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Enter blog title"
                  required
                />
              </div>

              <div>
                <label htmlFor="slug" className="block text-sm font-medium mb-2">
                  Slug
                </label>
                <input
                  id="slug"
                  type="text"
                  value={formData.slug}
                  onChange={(e) =>
                    setFormData({ ...formData, slug: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="blog-url-slug"
                  required
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  rows={3}
                  placeholder="Brief description of your blog"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium mb-2">
                    Category
                  </label>
                  <input
                    id="category"
                    type="text"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="AI, Cloud, etc."
                  />
                </div>
                <div>
                  <label htmlFor="readingTime" className="block text-sm font-medium mb-2">
                    Reading Time
                  </label>
                  <input
                    id="readingTime"
                    type="text"
                    value={formData.readingTime}
                    onChange={(e) =>
                      setFormData({ ...formData, readingTime: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="5 min read"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="tags" className="block text-sm font-medium mb-2">
                  Tags (comma-separated)
                </label>
                <input
                  id="tags"
                  type="text"
                  value={formData.tags}
                  onChange={(e) =>
                    setFormData({ ...formData, tags: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="AI, Machine Learning, System Design"
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium mb-2">
                  Content (Markdown supported)
                </label>
                <textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none font-mono text-sm"
                  rows={20}
                  placeholder="Write your blog content here..."
                  required
                />
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button
                onClick={() => handleSubmit(false)}
                disabled={loading}
                className="flex items-center gap-2 px-6 py-3 border rounded-lg hover:bg-muted transition-all disabled:opacity-50"
              >
                <Save className="w-5 h-5" />
                {loading ? "Saving..." : "Save as Draft"}
              </button>
              <button
                onClick={() => handleSubmit(true)}
                disabled={loading}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Publishing...
                  </>
                ) : (
                  "Publish"
                )}
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="bg-card border rounded-xl p-8">
            <div className="prose prose-invert max-w-none">
              {coverImage && (
                <img src={coverImage} alt="Cover" className="rounded-lg mb-8" />
              )}
              <h1>{formData.title}</h1>
              <p className="text-xl text-muted-foreground">{formData.description}</p>
              <div dangerouslySetInnerHTML={{ __html: formData.content.replace(/\n/g, '<br>') }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
