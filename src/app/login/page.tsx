export default function LoginPage() {
  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Login</h1>
      <p>Placeholder for Authentication system.</p>
      <ul>
        <li>Firebase Project Setup</li>
        <li>Backend-Firebase Communication</li>
        <li>User Authentication Logic</li>
      </ul>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input type="email" placeholder="Email" disabled />
        <input type="password" placeholder="Password" disabled />
        <button type="submit" disabled>Login (Placeholder)</button>
      </form>
    </div>
  );
}
