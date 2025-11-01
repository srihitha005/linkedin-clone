import express from "express";
import auth from "../middleware/auth.js";
import Post from "../models/Post.js";
import User from "../models/User.js";

const router = express.Router();

// --- Create post ---
router.post("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    const newPost = new Post({
      text: req.body.text,
      author: user.id,
    });
    const post = await newPost.save();
    const populated = await post.populate("author", "name");
    res.json(populated);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// --- Get all posts ---
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "name")
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// --- Like post ---
router.post("/like/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    if (post.likes.includes(req.user.id))
      return res.status(400).json({ message: "Already liked" });

    post.likes.push(req.user.id);
    await post.save();
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// --- Delete post (only author) ---
router.delete("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    if (post.author.toString() !== req.user.id)
      return res.status(401).json({ message: "Not authorized" });

    await post.deleteOne();
    res.json({ message: "Post deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

export default router;
