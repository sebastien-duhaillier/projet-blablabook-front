import { env } from '$env/dynamic/public';

export async function load() {
  const API_URL = env.PUBLIC_API_URL || 'http://localhost:3000';
  const res = await fetch(`${API_URL}/catalog?page=1&limit=100`);
  const data = await res.json();

  // Pour le carousel infini, on duplique la liste dans la page Svelte
  return { book: data.books };
}