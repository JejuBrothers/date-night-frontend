export async function getUser(token, username) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL + '/users?username=' + username,
    { headers: { Authorization: `Bearer ` + token } },
  );
  return await res.json();
}

export async function addPartner(token, target) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL +
      '/users/partner/add?target=' +
      target,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ` + token,
      },
    },
  );
  return await res.json();
}
