export async function createAccount(AccountInfo) {
  const res = await fetch('http://localhost:3000/auth/signup', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(AccountInfo),
  });
  return await res.json();
}

export async function loginAccount(AccountInfo) {
  const res = await fetch('http://localhost:3000/auth/login', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(AccountInfo),
  });
  return await res.json();
}
