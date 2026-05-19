export default function DashboardPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Central Dashboard</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <section style={{ border: '1px solid #ccc', padding: '1rem' }}>
          <h2>Top Loggers / Contributors</h2>
          <p>Placeholder for contributor rankings.</p>
        </section>
        <section style={{ border: '1px solid #ccc', padding: '1rem' }}>
          <h2>Recent Activity Feed</h2>
          <p>Placeholder for the latest log updates.</p>
        </section>
        <section style={{ border: '1px solid #ccc', padding: '1rem', gridColumn: '1 / -1' }}>
          <h2>Live Time View</h2>
          <p>Real-time log stream will go here.</p>
        </section>
      </div>
    </div>
  );
}
