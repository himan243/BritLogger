export default function SearchPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Search & Filtering</h1>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <input type="text" placeholder="Search logs..." disabled />
        <select disabled><option>Department</option></select>
        <select disabled><option>Issue Type</option></select>
        <select disabled><option>User</option></select>
        <select disabled><option>Status</option></select>
        <input type="date" placeholder="Start Date" disabled />
        <input type="date" placeholder="End Date" disabled />
      </div>
      <p>Filtered results will appear here.</p>
    </div>
  );
}
