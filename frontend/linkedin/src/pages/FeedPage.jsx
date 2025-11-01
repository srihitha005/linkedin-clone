import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import CreatePost from '../components/CreatePost';
import PostFeed from '../components/PostFeed';
import { createPost, getPosts } from '../api';

export default function FeedPage({ user, onLogout }) {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  const handleCreatePost = async (text) => {
    const token = localStorage.getItem('token');
    const newPost = await createPost(token, text);
    setPosts([newPost, ...posts]);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar user={user} onLogout={onLogout} />
      <div className="max-w-lg mx-auto mt-6">
        <CreatePost onSubmit={handleCreatePost} />
        <PostFeed posts={posts} />
      </div>
    </div>
  );
}
