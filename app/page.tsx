import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <p>This is the home page.</p>
      <Link href="/nested">Go to nested page</Link>
    </div>
  );
}
