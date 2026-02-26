import { env } from '$env/dynamic/public';

export async function load({ params }) {
  const API_URL = env.PUBLIC_API_URL || 'http://localhost:3000';
  const res = await fetch(`${API_URL}/book/${params.id}`);
  const book = await res.json();

  console.log(book);

  return { book };
}
