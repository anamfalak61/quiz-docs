interface LiveDemoProps {
  url: string
  title?: string
}

export default function LiveDemo({ url, title = 'Live demo' }: LiveDemoProps) {
  return (
    <div
      style={{
        margin: '1.5rem 0',
        overflow: 'hidden',
        borderRadius: '0.75rem',
        border: '1px solid rgba(128, 128, 128, 0.4)',
      }}
    >
      <iframe
        src={url}
        title={title}
        loading="lazy"
        style={{ display: 'block', width: '100%', height: '560px', border: 0, background: '#fff' }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem',
          padding: '0.5rem 1rem',
          fontSize: '0.875rem',
          borderTop: '1px solid rgba(128, 128, 128, 0.4)',
        }}
      >
        <span>{title}</span>
        <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
          Open in a new tab
        </a>
      </div>
    </div>
  )
}