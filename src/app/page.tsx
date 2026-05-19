export default function Home() {
  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h1>Welcome to BritLogger</h1>
      <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '1rem auto' }}>
        This is a personal and team logging website designed to track daily progress with exact timestamps.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
        <div style={{ padding: '1rem', border: '1px solid #eaeaea', borderRadius: '8px' }}>
          <h3>Authentication</h3>
          <p>Login and profile management with Firebase.</p>
        </div>
        <div style={{ padding: '1rem', border: '1px solid #eaeaea', borderRadius: '8px' }}>
          <h3>Logging</h3>
          <p>Manual log entry with descriptive notes and timestamps.</p>
        </div>
        <div style={{ padding: '1rem', border: '1px solid #eaeaea', borderRadius: '8px' }}>
          <h3>Dashboard</h3>
          <p>Real-time activity feed and contributor insights.</p>
        </div>
        <div style={{ padding: '1rem', border: '1px solid #eaeaea', borderRadius: '8px' }}>
          <h3>Search</h3>
          <p>Powerful filtering by department, user, and status.</p>
        </div>
      </div>
      <footer style={{ marginTop: '4rem', color: '#999' }}>
        <p>Built for the BritLogger Team collaboration.</p>
      </footer>
    </div>
  );
}
