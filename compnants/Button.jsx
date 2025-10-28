"use client";

import { deleteTodo, updateTodo } from "@/lib/action";
import { useState, useTransition } from "react";

export default function Button({ todo }) {
  const [isPending, startTransition] = useTransition();
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [author, setAuthor] = useState(todo.author || "");


    const handleUpdate = (e) => {
      e.preventDefault();
      startTransition(async () => {
        await updateTodo(todo._id, { title, author });
        setShow(false);
      });
    };
  
  const handleDelete = () => {
    startTransition(async () => {
      await deleteTodo(todo._id);
    });
  };

  return (
    <>
      {" "}
      {/* Modal */}
      {show && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Edit Todo</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full border rounded-md px-3 py-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  author
                </label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  rows={3}
                  className="w-full border rounded-md px-3 py-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShow(false)}
                  className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isPending}
                  className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 disabled:opacity-50"
                >
                  {isPending ? "Updating..." : "Update"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setShow(true)}
          className="text-sm px-3 py-1 rounded-md bg-green-100 text-green-700 hover:bg-green-200"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="text-sm px-3 py-1 rounded-md bg-red-100 text-red-700 hover:bg-red-200"
        >
          Delete
        </button>
      </div>
    </>
  );
}
