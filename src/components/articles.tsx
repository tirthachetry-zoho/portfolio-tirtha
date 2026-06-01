import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

const categories = ["All", "AI", "Software Engineering", "System Design", "Cloud", "Productivity", "Open Source", "Career Growth", "Automation"];

export async function Articles() {
  let articlesList: any[] = [];
  
  try {
    const supabase = await createClient();
    const { data: articles } = await supabase
      .from("blogs")
      .select("*")
      .eq("published", true)
      .order("published_at", { ascending: false })
      .limit(3);

    articlesList = articles || [];
  } catch (error) {
    console.error("Error fetching articles:", error);
    // Return empty array on error to avoid breaking the UI
  }

  return (
    <section id="articles" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Articles & Insights</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical articles on AI, software engineering, system design, and developer productivity.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border hover:border-primary hover:text-primary transition-all duration-300 text-sm"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {articlesList.length > 0 && (
          <div className="mb-12">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">Featured</span>
                <span className="text-sm text-muted-foreground">{articlesList[0].category}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{articlesList[0].title}</h3>
              <p className="text-muted-foreground mb-4 max-w-2xl">{articlesList[0].description}</p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(articlesList[0].published_at || articlesList[0].created_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {articlesList[0].reading_time}
                </div>
              </div>
              <Link
                href={`/articles/${articlesList[0].slug}`}
                className="inline-flex items-center text-primary hover:underline"
              >
                Read Article <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        )}

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articlesList.slice(1).map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="block"
            >
              <article className="bg-card border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 cursor-pointer h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">{article.category}</span>
                </div>
                <h3 className="font-semibold mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{article.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(article.published_at || article.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.reading_time}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {article.tags?.slice(0, 3).map((tag) => (
                    <span key={tag} className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/articles"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300"
          >
            View All Articles <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
