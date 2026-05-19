export default function ExportPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Exporting & Reports</h1>
      <section style={{ marginBottom: '2rem' }}>
        <h2>PDF Generation</h2>
        <p>Generate downloadable PDF logs and reports.</p>
        <button disabled>Download PDF</button>
      </section>
      <section>
        <h2>Reports & Analytics</h2>
        <p>Visual charts and data analysis of team progress.</p>
        <div style={{ width: '100%', height: '200px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Graph Placeholder
        </div>
      </section>
    </div>
  );
}
