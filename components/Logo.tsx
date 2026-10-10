export default function Logo() {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
      <span
        aria-hidden="true"
        style={{
          display: 'grid',
          placeItems: 'center',
          width: 34,
          height: 34,
          borderRadius: 10,
          background: 'linear-gradient(135deg, #7c4dff, #5b2fc4)',
          color: '#fff',
          fontWeight: 800,
          fontSize: 18,
        }}
      >
        W
      </span>
      <span style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
        Weather<span style={{ color: '#6d3fd9' }}>Dash</span>{' '}
        <span style={{ fontWeight: 500, fontSize: '0.95rem', opacity: 0.7 }}>Docs</span>
      </span>
    </span>
  )
}