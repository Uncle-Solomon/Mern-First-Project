import React from "react";
import { FiEdit, FiMessageSquare, FiTrash } from "react-icons/fi";

import { images } from "../../constants";

const Comment = ({ comment, loggedInUserId }) => {
  const isUserLogin = Boolean(loggedInUserId);
  const commentBelongsToUser = Boolean(loggedInUserId === comment.user._id);
  return (
    <div className="flex flex-nowrap items-start gap-x-3 bg-[#f2f4f5] p-3 rounded-lg">
      <img
        src={images.PostProfile}
        alt="A profile"
        className="w-9 h-9 object-cover rounded-full"
      />
      <div className="flex-1 flex flex-col">
        <h5 className="font-bold text-dark-hard text-xs">
          {comment.user.name}
        </h5>
        <span className="text-xs text-dark-light">
          {new Date(comment.createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
          })}
        </span>
        <p className="font-opensans mt-[10px] text-dark-light">
          {comment.desc}
        </p>
        <div className="flex items-center gap-x-3 text-dark-light font-roboto text-sm mt-3 mb-3">
          {isUserLogin && (
            <button className="flex items-center space-x-2">
              <FiMessageSquare className="w-4 h-auto" />
              <span>Reply</span>
            </button>
          )}

          {commentBelongsToUser && (
            <>
              <button className="flex items-center space-x-2">
                <FiEdit className="w-4 h-auto" />
                <span>Edit</span>
              </button>
              <button className="flex items-center space-x-2">
                <FiTrash className="w-4 h-auto" />
                <span>Delete</span>
              </button>{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
