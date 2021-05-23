export default function generateId(): string {
  let id = '';
  const letters = 'ABCDEFGHIJKLMNOPRSTUWXYZ';
  id += letters.charAt(Math.floor(Math.random() * letters.length));
  id += letters.charAt(Math.floor(Math.random() * letters.length));
  id += String(Math.random()).slice(2, 6);

  return id;
}
