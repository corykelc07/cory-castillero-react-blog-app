import React, { useRef, useEffect, useState } from "react";
import IndividualComment from "./IndividualComment";
import axios from "axios";
import { useParams } from "react-router"; 
import { useUsername } from "../authWrapper/AuthContext";

function CommentBox({ initialComments = [] }) {
  const params = useParams(); 
  const [comment, setComment] = useState({content: "" });
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState("");
  const [commentList, setCommentList] = useState([]);

  const username = useUsername();

  useEffect(() => {
    const normalComment = (initialComments || []).map((c) => ({
      id: c.id,
      name: c.name,
      content: c.body ?? c.content, 
    }));
    setCommentList(normalComment);
  }, [initialComments]);

  const textboxRef = useRef();

  const postComment = async () => {
    const body = comment.content.trim();
    if (!body) {
      setError("Please fill out both fields.");
      return;
    }
    setError("");
    setPosting(true);
    try {
      const res = await axios.post(
        `https://jsonplaceholder.typicode.com/posts/${params.post_id}/comments`,
        { name: username, body }
      );
      const saved = {
        id: res?.data?.id ?? `comment-${commentList.length + 1}`,
        name: username,
        content: body,
      };
      setCommentList((prev) => [...prev, saved]);
      setComment({ name: "", content: "" });
      textboxRef.current?.focus();
    } catch (e) {
      setError("Failed to post comment. Try again.");
      console.error(e);
    } finally {
      setPosting(false);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Comments</h2>

      {username ? (
        <p className="mb-2 text-sm text-gray-600">
        Commenting as <span className="font-semibold">{username}</span>
        </p>
        ) : (
        <p className="mb-2 text-sm text-red-600">
        You must be logged in to comment.
        </p>
        )}

      <textarea
        disabled = {!username}
        ref={textboxRef}
        value={comment.content}
        onChange={(e) => setComment({ ...comment, content: e.target.value })}
        name="comment-section"
        id="comment-section"
        placeholder="Add a comment"
        className="w-full max-w-lg rounded-md border border-gray-300 p-3 mb-2 block"
      />

      <button
        onClick={postComment} 
        disabled={posting || !comment.content.trim() || !username}
        type="button" 
        className="bg-yellow-400 text-neutral-50 rounded-full px-6 py-2 hover:bg-yellow-500 transition-colors"
      >
        Submit
      </button>

      {error && <p className="text-red-600 mt-2">{error}</p>}

      {commentList.length === 0 ? (
        <p className="text-center text-gray-600">
          No comments yet. Be the first to comment!
        </p>
      ) : (
        <div className="mt-6">
          <h3 className="font-bold text-gray-800 mb-2">Existing Comments:</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            {commentList.map((c, index) => (
              <li key={c.id }>
                <IndividualComment name={c.name} content={c.content} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CommentBox;
