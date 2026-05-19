export default function LogsPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Manual Logging</h1>
      <section style={{ marginBottom: '2rem' }}>
        <h2>Add New Log</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px' }}>
          <textarea placeholder="Descriptive note of what you worked on" rows={4} disabled />
          <input type="datetime-local" disabled />
          <button type="submit" disabled>Save Log</button>
        </form>
      </section>
      <section>
        <h2>Log History</h2>
        <p>Placeholder for list of logs with Edit/Delete functionality.</p>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>Time</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>Note</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>[Timestamp]</td>
              <td>Example work log note...</td>
              <td>[Edit] [Delete]</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
