export function renderStudy() {
  const div = document.createElement('div');
  div.className = 'card';
  div.textContent = 'Corsi di studio';
  fetch('./data/study.json')
    .then(r => r.json())
    .then(data => {
      const ul = document.createElement('ul');
      data.forEach(j => {
        const li = document.createElement('li');
        li.textContent = j.name;
        ul.appendChild(li);
      });
      div.appendChild(ul);
    })
    .catch(() => {});
  return div;
}
