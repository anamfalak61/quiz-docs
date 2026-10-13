import Link from 'next/link'

const buttonBase = {
  display: 'inline-block',
  padding: '0.8rem 1.6rem',
  borderRadius: '0.75rem',
  fontWeight: 600,
  textDecoration: 'none',
} as const

export default function Hero() {
  return (
    <section
      style={{
        textAlign: 'center',
        padding: '3rem 1rem 2.5rem',
        margin: '0 0 2.5rem',
        borderRadius: '1.5rem',
        background:
          'radial-gradient(circle at 50% 0%, rgba(109, 63, 217, 0.16), transparent 70%)',
      }}
    >
      <p
        style={{
          display: 'inline-block',
          margin: 0,
          padding: '0.35rem 1rem',
          borderRadius: '999px',
          border: '1px solid rgba(109, 63, 217, 0.35)',
          background: 'rgba(109, 63, 217, 0.08)',
          color: '#6d3fd9',
          fontSize: '0.85rem',
          fontWeight: 500,
        }}
      >
        Next.js · TypeScript · Tailwind CSS
      </p>

      <h1
        style={{
          margin: '1.25rem 0 0',
          fontSize: 'clamp(2.25rem, 6vw, 3.75rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
        }}
      >
        Build a <span style={{ color: '#6d3fd9' }}>Weather Dashboard</span> with Next.js
      </h1>

      <p
        style={{
          maxWidth: '38rem',
          margin: '1.25rem auto 0',
          fontSize: '1.1rem',
          lineHeight: 1.7,
          opacity: 0.75,
        }}
      >
        A step-by-step guide to a weather app with city search, a live forecast and an API key
        that never reaches the browser.
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.75rem',
          marginTop: '2rem',
        }}
      >
        <Link href="/setup/folder-structure" style={{ ...buttonBase, background: '#6d3fd9', color: '#fff' }}>
          Start learning →
        </Link>
        <a
          href="#try-the-live-demo"
          style={{ ...buttonBase, border: '1px solid rgba(109, 63, 217, 0.4)', color: '#6d3fd9' }}
        >
          Try the live demo
        </a>
      </div>
    </section>
  )
}