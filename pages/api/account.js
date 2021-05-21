export async function createAccount(AccountInfo) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    //TODO: Set correct API Endpoint (auth/register)
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(AccountInfo),
  });
  return await response.json();
}
