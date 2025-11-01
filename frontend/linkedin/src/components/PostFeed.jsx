import PostCard from './PostCard';

export default function PostFeed({ posts }) {
  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts yet.</p>
      ) : (
        posts.map((p) => <PostCard key={p._id} post={p} />)
      )}
    </div>
  );
}
