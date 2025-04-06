import React from "react";
import Post from "./Post";

const Feed = () => {
  const posts = [
    {
      id: 1,
      username: "john_doe",
      userImg: "/Images/bg-img.png",
      postImg: "/Images/bg-img.png",
      likes: 120,
      caption: "A beautiful day in the mountains!",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      username: "jane_smith",
      userImg: "/Images/bg-img.png",
      postImg: "/Images/bg-img.png",
      likes: 85,
      caption: "Loving this new cafe ☕️",
      timestamp: "1 hour ago",
    },
  ];

  return (
    <div className="flex justify-center bg-gray-950 min-h-screen pt-8">
      <div className="w-full max-w-[470px]">
        {posts.map((post) => (
          <Post
            key={post.id}
            username={post.username}
            userImg={post.userImg}
            postImg={post.postImg}
            likes={post.likes}
            caption={post.caption}
            timestamp={post.timestamp}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
