import Link from 'next/link';

export const dynamic = 'force-dynamic',
  revalidate = 0;

function getRandomNumber() {
  return Math.random();
}

export default function NestedPage() {
  const number = getRandomNumber();

  return (
    <div>
      <p>This is a nested page</p>
      <p>Random number is {number}</p>
      <Link href="/">Go to home page</Link>
    </div>
  );
}
