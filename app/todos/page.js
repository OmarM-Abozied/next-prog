import { deleteTodo } from "@/lib/action";
import { GET } from "../api/todos/route";
import Button from "@/compnants/Button";

export const dynamic = "force-dynamic";
async function TodosList() {
  const res = await GET();
  const data = await res.json();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Todos List
      </h1>
      <div className="space-y-4">
        {data.map((todo) => (
          <div
            key={todo._id}
            className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-1">
              Title: {todo.title}
            </h2>
            <p className="text-gray-600 mb-3">Author: {todo.author}</p>
            <Button
              todo={todo}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodosList;
