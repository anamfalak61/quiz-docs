import Link from 'next/link'

const FEATURES = [
  {
    href: '/setup/folder-structure',
    icon: '🧱',
    title: 'Setup',
    text: 'Project structure, strict TypeScript and keeping your API key safe.',
  },
  {
    href: '/guides/ui-styling',
    icon: '🎨',
    title: 'UI & Styling',
    text: 'A dark green dashboard with cards, icons and a °C / °F switch.',
  },
  {
    href: '/guides/implementation',
    icon: '⚙️',
    title: 'Implementation',
    text: 'A server route, typed fetch, loading and error states, and city search.',
  },
  {
    href: '/code-reference',
    icon: '📚',
    title: 'Code Reference',
    text: 'Every type, function, component and request in one place.',
  },
  {
    href: '/troubleshooting',
    icon: '🛠️',
    title: 'Troubleshooting',
    text: 'Fix 401, 404 and other common errors.',
  },
]

export default function FeatureCards() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1rem',
        margin: '1.5rem 0',
      }}
    >
      {FEATURES.map((feature) => (
        <Link key={feature.href} href={feature.href} className="feature-card">
          <div aria-hidden="true" style={{ fontSize: '1.75rem' }}>
            {feature.icon}
          </div>
          <div style={{ margin: '0.5rem 0 0.25rem', fontSize: '1.1rem', fontWeight: 700 }}>
            {feature.title}
          </div>
          <div style={{ fontSize: '0.9rem', opacity: 0.75, lineHeight: 1.55 }}>{feature.text}</div>
        </Link>
      ))}
    </div>
  )
}