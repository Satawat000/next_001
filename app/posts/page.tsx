import React from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

async function getPosts(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

async function PostsPage() {
  const posts = await getPosts();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">List of Posts</h1>
      <div className="mt-6 grid gap-4">
        {posts.slice(0, 10).map((post) => (
          <div key={post.id} className="rounded-lg border p-4">
            <h2 className="text-xl font-bold">{post.id}</h2>
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-lg">{post.body}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default PostsPage;
