export default function ProfilePage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>User Profile</h1>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#ddd' }} />
        <div>
          <h2>User Name</h2>
          <p>Email: user@example.com</p>
          <p>Department: Development</p>
        </div>
      </div>
      <button disabled style={{ marginTop: '1rem' }}>Edit Profile</button>
    </div>
  );
}
