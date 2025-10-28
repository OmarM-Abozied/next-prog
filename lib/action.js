"use server";
import { redirect } from "next/navigation";
import { Todo } from "./models/todos";

export async function saveNewTod(formData) {
  try {
    const title = formData.get("title");
    const author = formData.get("author");
    await Todo.create({ title, author });
  } catch (err) {
    console.error("error in saveTodos", err);
  }
  redirect("/todos");
}
export async function deleteTodo(id) {
  await Todo.findByIdAndDelete(id);
  redirect("/todos");
}

export async function updateTodo(id, data) {
  await Todo.findByIdAndUpdate(id, data);
  redirect("/todos");
}
