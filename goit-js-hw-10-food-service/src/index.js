import menuItems from './menu.json';
import menuItemTemplate from './templates/menu-item.hbs';
import './styles.css';

const refs = {
  menu: document.querySelector('.js-menu'),
};

buildMenuItem(menuItems);

function buildMenuItem(menuItems) {
  const markup = menuItems.map(item => menuItemTemplate(item)).join('');
  refs.menu.insertAdjacentHTML('beforeend', markup);
}

const body = document.querySelector('body');

const switchSelector = document.querySelector('.js-switch-input');

const savedTheme = localStorage.getItem('theme');

switchSelector.addEventListener('change', changeTheme);

switchSelector.addEventListener('change', saveThemeToLocalStorage);

applyThemeFromLocalStorage();

function changeTheme(event) {
  if (body.classList.contains('dark-theme')) {
    body.classList.replace('dark-theme', 'light-theme');
  } else if (body.classList.contains('light-theme')) {
    body.classList.replace('light-theme', 'dark-theme');
  } else body.classList.add('dark-theme');
}

function saveThemeToLocalStorage(event) {
  const currentTheme = event.path[4].classList.value;
  const savedTheme = localStorage.setItem('theme', currentTheme);
}

function applyThemeFromLocalStorage() {
  if (savedTheme === 'dark-theme') {
    body.classList.add('dark-theme');
    switchSelector.checked = true;
  }
  body.classList.add('light-theme');
}

// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };

// localStorage.setItem('Theme', JSON.stringify(Theme));

// const persistedTheme = localStorage.getItem('Theme');
// const parsedTheme = JSON.parse(persistedTheme);
// console.log(parsedTheme);
