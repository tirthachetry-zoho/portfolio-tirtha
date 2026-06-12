"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Plus, FileText, LogOut, Trash2 } from "lucide-react";

interface Post {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readingTime: string;
  tags: string[];
  published: boolean;
}

export default function AdminDashboard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  const fetchPosts = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/login");
        return;
      }

      // Fetch posts from API endpoint
      const response = await fetch('/api/admin/posts');
      const data = await response.json();
      setPosts(data || []);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (slug: string) => {
    if (!confirm("Are you sure you want to delete this article?")) return;

    try {
      const response = await fetch(`/api/admin/posts/${slug}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete post');
      
      // Refresh the posts list
      fetchPosts();
    } catch (error: any) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your blogs and content</p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/admin/new"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all"
            >
              <Plus className="w-5 h-5" />
              New Article
            </Link>
          </div>
        </div>

        <div className="bg-card border rounded-xl overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Your Articles</h2>
          </div>
          
          {posts && posts.length > 0 ? (
            <div className="divide-y">
              {posts.map((post) => (
                <div
                  key={post.slug}
                  className="p-6 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-lg">{post.title}</h3>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            post.published
                              ? "bg-green-500/10 text-green-500"
                              : "bg-yellow-500/10 text-yellow-500"
                          }`}
                        >
                          {post.published ? "Published" : "Draft"}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                        {post.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{post.category}</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href={`/admin/edit/${post.slug}`}
                        className="px-4 py-2 border rounded-lg hover:bg-primary hover:text-primary-foreground transition-all text-sm"
                      >
                        Edit
                      </Link>
                      <Link
                        href={`/articles/${post.slug}`}
                        target="_blank"
                        className="px-4 py-2 border rounded-lg hover:bg-muted transition-all text-sm"
                      >
                        View
                      </Link>
                      <button
                        onClick={() => handleDelete(post.slug)}
                        className="px-4 py-2 border rounded-lg hover:bg-destructive hover:text-destructive-foreground transition-all text-sm"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center">
              <FileText className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">No blogs yet</h3>
              <p className="text-muted-foreground mb-6">
                Start writing your first blog post
              </p>
              <Link
                href="/admin/new"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all"
              >
                <Plus className="w-5 h-5" />
                Create Your First Blog
              </Link>
            </div>
          )}
        </div>

        <div className="mt-8 flex justify-end">
          <form action="/auth/signout" method="post">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 border rounded-lg hover:bg-destructive hover:text-destructive-foreground transition-all"
            >
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
