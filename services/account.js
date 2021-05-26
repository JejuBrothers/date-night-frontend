export async function createAccount(AccountInfo) {
  const res = await fetch('http://localhost:3000/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(AccountInfo),
  });
  return await res.json();
}
