import Link from "next/link";
import { useEffect } from "react";
import FormPost from "./Form";

const fetchData = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
  if (!res.ok) {
    // alert("failed to fetch");
  } else {
    return res.json();
  }
};
export default async function Home() {
  const data = await fetchData();
  console.log("data", data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/dashboard"}>Go to the dashboard</Link>
      <FormPost />
      <button className="bg-black text-white px-6 py-3">click for data</button>
    </main>
  );
}
