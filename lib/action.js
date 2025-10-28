"use server";
import { revalidatePath } from "next/cache";
import { Todo } from "./models/todos";
import { redirect } from "next/navigation";

export async function saveNewTod(formData) {
  try {
    const title = formData.get("title");
    const author = formData.get("author");
    await Todo.create({ title, author });
    revalidatePath("/todos"); 
  } catch (err) {
    console.error("error in saveTodos", err);
  }
}
export async function deleteTodo(id) {
  await Todo.findByIdAndDelete(id);
  revalidatePath("/todos");
}

export async function updateTodo(id, data) {
  await Todo.findByIdAndUpdate(id, data);
  revalidatePath("/todos");
}
