"use client";

import React, { useState } from "react";

export default function FormPost() {
  const [title, setTitle] = useState("");

  async function submitPost(e: React.FormEvent) {
    console.log("I am in submit");
    e.preventDefault();
    const data = await fetch(`http://localhost:3000/api/createPost`, {
      method: "POST",
      body: JSON.stringify({ title }),
    });
    console.log("I am after submit", data);
    const res = await data.json();
    console.log("Result", res);
  }

  return (
    <form onSubmit={submitPost}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  );
}
