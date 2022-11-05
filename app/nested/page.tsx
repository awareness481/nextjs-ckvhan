import Link from "next/link";

export const dynamic = "force-dynamic",
  revalidate = 0;

export default async function NestedPage() {
  const res = await fetch("http://localhost:3000/api/random");
  const { number } = await res.json();

  return (
    <div>
      <p>This is a nested page</p>
      <p>Random number is {number}</p>
      <Link href="/">Go to home page</Link>
    </div>
  );
}
