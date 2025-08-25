export function renderShop(title) {
  const div = document.createElement('div');
  div.className = 'card';
  div.textContent = `Shop: ${title}`;
  return div;
}
