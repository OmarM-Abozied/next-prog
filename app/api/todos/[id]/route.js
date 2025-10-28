import { Todo } from "@/lib/models/todos";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    await Todo.findByIdAndDelete(id);
    return NextResponse.json({ message: "Todo Delted Successfuly" });
  } catch (err) {
    console.error("error in DELETE", err);
    return NextResponse.json({ message: err.message });
  }
}
export async function UPDATE(req, { params }) {
  try {
    const { id } = params;
    const updatedData = await req.json();
    await Todo.findByIdAndUpdate(id, updatedData);
    return NextResponse.json({ message: "Todo updated successfully" });
  } catch (err) {
    console.error("error in update", err);
    return NextResponse.json({ message: err.message });
  }
}
