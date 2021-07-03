export async function createAccount(accountInfo) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL + '/auth/signup',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(accountInfo),
    },
  );
  return await res.json();
}

export async function loginAccount(accountInfo) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL + '/auth/login',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(accountInfo),
    },
  );
  return await res.json();
}
