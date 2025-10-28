import { dbConnection } from "@/lib/dbConnection";
import { Todo } from "@/lib/models/todos";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
dbConnection();
export async function GET() {
  try {
    const todos = await Todo.find();
    return NextResponse.json(todos, { status: 200 });
  } catch (err) {
    console.error("error in Get", err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
export async function POST(req) {
  try {
    const todo = await req.json();
    const newTodos = await Todo.create(todo);
    return NextResponse.json(
      { message: "Todos is created Successfully", newTodos },
      { status: 200 }
    );
  } catch (err) {
    console.error("error in Post", err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
