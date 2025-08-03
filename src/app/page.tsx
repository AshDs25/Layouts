// src/app/page.tsx

import Link from 'next/link';
import '@/style/_app.scss';

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>🧱 Layout Showcase</h1>
      <p>Select a layout to preview:</p>
      <ul style={{ marginTop: '1rem', lineHeight: '2rem' }}>
        <li>
          <Link href="/layout1">➡️ Layout 1 – Sidebar Grid</Link>
        </li>
        {/* Add more as you go */}
      </ul>
    </main>
  );
}
