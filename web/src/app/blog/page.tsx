import { client } from "@/lib/sanity";
import BlogCard from "@/components/Blog/BlogCard";

export const metadata = {
    title: "Blog - EventPro",
    description: "Latest news, tips, and insights from the world of event planning.",
};

// Revalidate every 60 seconds
export const revalidate = 60;

async function getPosts() {
    try {
        const query = `*[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      mainImage,
      publishedAt,
      categories[]->{title},
      body
    }`;
        return await client.fetch(query);
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
}

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <div className="min-h-screen py-20">
            <div className="container px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
                    <p className="text-xl text-muted-foreground">
                        Latest news, tips, and insights from the world of event planning.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.length > 0 ? (
                        posts.map((post: any) => (
                            <BlogCard key={post.slug.current} post={post} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 text-muted-foreground">
                            No posts found. Check back later!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
