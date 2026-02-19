import { useState } from "react";

function Posts() {

  const initialPosts = [
    {
      id: 1,
      type: "image",
      user: {
        username: "john_doe",
        userProfilePic: "https://i.pravatar.cc/150?img=1"
      },
      url: "https://picsum.photos/600/600?random=1",
      caption: "Sunsets are proof that endings can be beautiful 🌅",
      likes: 245,
      liked: false,
      comments: [],
      showCommentBox: false,
      showShareBox: false,
      time: "2 HOURS AGO"
    },

    {
      id: 2,
      type: "image",
      user: {
        username: "emma_watson",
        userProfilePic: "https://i.pravatar.cc/150?img=5"
      },
      url: "https://picsum.photos/600/600?random=2",
      caption: "Chasing dreams ✨",
      likes: 532,
      liked: false,
      comments: [],
      showCommentBox: false,
      showShareBox: false,
      time: "5 HOURS AGO"
    },

    // 🔥 AUTO GENERATED POSTS
    ...Array.from({ length: 10 }, (_, i) => ({
      id: i + 3,
      type: i % 3 === 0 ? "video" : "image",
      user: {
        username: `user_${i + 3}`,
        userProfilePic: `https://i.pravatar.cc/150?img=${i + 10}`
      },
      url:
        i % 3 === 0
          ? "https://www.w3schools.com/html/mov_bbb.mp4"
          : `https://picsum.photos/600/600?random=${i + 3}`,
      caption: "Living the moment ✨",
      likes: Math.floor(Math.random() * 2000),
      liked: false,
      comments: [],
      showCommentBox: false,
      showShareBox: false,
      time: `${i + 1} HOURS AGO`
    }))
  ];

  const usersToShare = ["alex_07", "sophia", "mike_22", "user_99"];

  const [posts, setPosts] = useState(initialPosts);
  const [commentText, setCommentText] = useState("");
  const [sharedMsg, setSharedMsg] = useState("");

  // ❤️ Like
  const toggleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1
            }
          : post
      )
    );
  };

  // 💬 Comment box
  const toggleCommentBox = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? { ...post, showCommentBox: !post.showCommentBox }
          : post
      )
    );
  };

  // ➕ Add comment
  const addComment = (id) => {
    if (!commentText.trim()) return;

    setPosts(
      posts.map((post) =>
        post.id === id
          ? { ...post, comments: [...post.comments, commentText] }
          : post
      )
    );
    setCommentText("");
  };

  // 😀 Emoji
  const addEmoji = (emoji) => {
    setCommentText((prev) => prev + emoji);
  };

  // 📤 Share
  const toggleShareBox = (id) => {
    setSharedMsg("");
    setPosts(
      posts.map((post) =>
        post.id === id
          ? { ...post, showShareBox: !post.showShareBox }
          : post
      )
    );
  };

  const sharePost = (username) => {
    setSharedMsg(`Post shared with @${username}`);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "30px auto" }}>
      {posts.map((post) => (
        <div key={post.id} style={{ background: "#fff", marginBottom: "25px" }}>
          
          {/* Header */}
          <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
            <img
              src={post.user.userProfilePic}
              alt=""
              style={{ width: 32, height: 32, borderRadius: "50%" }}
            />
            <strong>{post.user.username}</strong>
          </div>

          {/* Media */}
          {post.type === "image" ? (
            <img src={post.url} alt="" style={{ width: "100%" }} />
          ) : (
            <video src={post.url} controls style={{ width: "100%" }} />
          )}

          {/* Footer */}
          <div style={{ padding: "10px" }}>
            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
              
              {/* Like */}
              <i
                className={`bi ${post.liked ? "bi-heart-fill" : "bi-heart"}`}
                style={{
                  fontSize: 22,
                  cursor: "pointer",
                  color: post.liked ? "red" : "#000"
                }}
                onClick={() => toggleLike(post.id)}
              ></i>

              {/* Comment */}
              <i
                className="bi bi-chat"
                style={{ fontSize: 22, cursor: "pointer" }}
                onClick={() => toggleCommentBox(post.id)}
              ></i>

              {/* Share */}
              <i
                className="bi bi-send"
                style={{ fontSize: 22, cursor: "pointer" }}
                onClick={() => toggleShareBox(post.id)}
              ></i>

              <i className="bi bi-bookmark-fill" style={{ marginLeft: "auto" }}></i>
            </div>

            <strong>{post.likes} likes</strong>

            <p>
              <strong>{post.user.username}</strong> {post.caption}
            </p>
{/* Modern Comment Box */}
{post.showCommentBox && (
  <div
    style={{
      marginTop: "14px",
      padding: "12px",
      borderRadius: "14px",
      border: "1px solid #e0e0e0",
      background: "#fafafa"
    }}
  >
    {/* Input Row */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px"
      }}
    >
      <input
        type="text"
        placeholder="Add a comment..."
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        style={{
          flex: 1,
          padding: "12px 14px",
          borderRadius: "25px",
          border: "1px solid #ddd",
          outline: "none",
          fontSize: "14px",
          background: "#fff"
        }}
      />

      <button
        onClick={() => addComment(post.id)}
        style={{
          border: "none",
          background: "transparent",
          color: "#0095f6",
          fontWeight: "600",
          cursor: "pointer",
          fontSize: "14px"
        }}
      >
        Post
      </button>
    </div>

    {/* Emoji Bar */}
    <div
      style={{
        marginTop: "10px",
        display: "flex",
        gap: "10px",
        paddingLeft: "6px"
      }}
    >
      {["😀", "😍", "🔥", "😂", "👏", "❤️"].map((emoji) => (
        <span
          key={emoji}
          onClick={() => addEmoji(emoji)}
          style={{
            cursor: "pointer",
            fontSize: "20px",
            transition: "transform 0.2s"
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.2)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          {emoji}
        </span>
      ))}
    </div>
  </div>
            )}

            {/* Share Box */}
            {post.showShareBox && (
              <div
                style={{
                  marginTop: 12,
                  padding: 10,
                  border: "1px solid #ddd",
                  borderRadius: 10
                }}
              >
                <strong>Share with</strong>
                {usersToShare.map((user) => (
                  <div
                    key={user}
                    onClick={() => sharePost(user)}
                    style={{ cursor: "pointer", marginTop: 6 }}
                  >
                    @{user}
                  </div>
                ))}
                {sharedMsg && (
                  <p style={{ color: "green", marginTop: 6 }}>{sharedMsg}</p>
                )}
              </div>
            )}

            <small style={{ color: "#888" }}>{post.time}</small>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
