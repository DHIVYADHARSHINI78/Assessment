import React, { useEffect, useState } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([]); //to store posts
  const [skip, setSkip] = useState(0);  //if post reach a limit
  const limit = 10; //limit 
  const [loading, setLoading] = useState(false);   
  const [hasMore, setHasMore] = useState(true);   // to take next 10 posts

  const fetchPosts = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const res = await fetch(
        `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`
      );
      const data = await res.json();

      if (data.posts.length > 0) {
        setPosts((prev) => [...prev, ...data.posts]);
        setSkip((prev) => prev + limit);
        if (skip + limit >= data.total) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Failed to load posts", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(); 
  }, []);

  return (
  
    <div className="px-6 py-10 bg-blue-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-blue-800  mt-8 mb-6">Blog Posts</h2>

      <div className="space-y-4 max-w-3xl mx-auto">
        {posts.map((post) => (
          <div key={post.id} className="p-4 bg-indigo-300 rounded shadow border-black border-2 ">
            <h3 className="text-lg  text-black font-bold">{post.title}</h3>
            <p className="text-white mt-2">{post.body}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        {loading ? (
          <p className="text-gray-500"> Loading...</p>
        ) : hasMore ? (
          <button
            onClick={fetchPosts}
            className="px-6 py-2 mt-4 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Load More...
          </button>
        ) : (
          <p className="text-green-600 mt-4"> No more posts to load!</p>
        )}
      </div>

    </div>

  
  );
};

export default Blog;
