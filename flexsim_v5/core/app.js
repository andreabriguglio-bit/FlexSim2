import { placeholderSvg } from './util.js';
import { renderHome } from '../features/home.js';
import { renderCreator } from '../features/creator.js';
import { renderStats } from '../features/stats.js';
import { renderSettings } from '../features/settings.js';
import { renderInventory } from '../features/inventory.js';
import { renderGarage } from '../features/garage.js';
import { renderShopGenerale } from '../features/shop_generale.js';
import { renderShopMeccanico } from '../features/shop_meccanico.js';
import { renderShopLoschi } from '../features/shop_loschi.js';
import { renderJobs } from '../features/jobs.js';
import { renderStudy } from '../features/study.js';

const features = {
  home: renderHome,
  creator: renderCreator,
  stats: renderStats,
  settings: renderSettings,
  inventory: renderInventory,
  garage: renderGarage,
  shop_generale: renderShopGenerale,
  shop_meccanico: renderShopMeccanico,
  shop_loschi: renderShopLoschi,
  jobs: renderJobs,
  study: renderStudy
};

export function initApp() {
  const appEl = document.getElementById('app');

  function loadFeature(name) {
    appEl.innerHTML = '';
    const view = features[name];
    const node = view ? view() : document.createTextNode('Feature mancante');
    if (node instanceof HTMLElement) {
      appEl.appendChild(node);
    } else {
      const div = document.createElement('div');
      div.className = 'card';
      div.appendChild(node);
      appEl.appendChild(div);
    }
  }

  document.querySelectorAll('.tabs button').forEach(btn => {
    btn.addEventListener('click', () => loadFeature(btn.dataset.feature));
  });

  // default
  loadFeature('home');
}
