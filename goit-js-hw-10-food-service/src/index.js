import menuItems from './menu.json';
import menuItemTemplate from './templates/menu-item.hbs';
import './styles.css';

const refs = {
  menu: document.querySelector('.js-menu'),
  switchInput: document.querySelector('.js-switch-input'),
  body: document.body,
};

buildMenuItem(menuItems);

function buildMenuItem(menuItems) {
  const markup = menuItems.map(item => menuItemTemplate(item)).join('');
  refs.menu.insertAdjacentHTML('beforeend', markup);
}

const currentTheme = localStorage.getItem('theme');
refs.body.classList.add(currentTheme || 'light-theme');
if (currentTheme === 'dark-theme') {
  refs.switchInput.checked = true;
}

function setBackgroundColor(e) {
  e.preventDefault();
  let current = '';
  if (refs.body.classList.contains('light-theme')) {
    refs.body.classList.replace('light-theme', 'dark-theme');
    current = 'dark-theme';
  } else {
    refs.body.classList.replace('dark-theme', 'light-theme');
    current = 'light-theme';
  }
  localStorage.setItem('theme', current);
}

refs.switchInput.addEventListener('change', setBackgroundColor);
