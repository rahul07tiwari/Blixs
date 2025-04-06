import React from 'react';

const Post = ({ username, userImg, postImg, likes, caption, timestamp }) => {
  return (
    <div className="bg-gray-950 rounded-md shadow-md mb-6 p-4 w-full">
      {/* Header */}
      <div className="flex items-center mb-3">
        <img src={userImg} alt="Profile" className="w-10 h-10 rounded-full mr-3" />
        <span className="font-semibold text-white">{username}</span>
      </div>

      {/* Image */}
      <img src={postImg} alt="Post" className="w-full rounded-md mb-3" />

      {/* Actions */}
      <div className="flex space-x-4 text-2xl mb-2 text-white">
        <span>❤️</span>
        <span>💬</span>
        <span>📤</span>
      </div>

      {/* Likes */}
      <div className="font-semibold text-sm mb-1 text-white">{likes} likes</div>

      {/* Caption */}
      <div className="text-sm text-white">
        <span className="font-semibold text-white">{username}</span> {caption}
      </div>

      {/* Time */}
      <div className="text-xs text-white mt-1">{timestamp}</div>
    </div>
  );
};

export default Post;
