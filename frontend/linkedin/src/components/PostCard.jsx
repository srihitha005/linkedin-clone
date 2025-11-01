

export default function PostCard({ post }) {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <div className="font-semibold mb-1">{post.author?.name}</div>
      <p className="text-gray-700">{post.text}</p>
      <small className="text-gray-500">{new Date(post.createdAt).toLocaleString()}</small>
    </div>
  );
}