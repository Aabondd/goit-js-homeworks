const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  switch: document.querySelector('.switch'),
  input: document.querySelector('.js-switch-input'),
};

refs.switch.addEventListener('change', handleSwitch);

console.dir(refs.input);

if (localStorage.getItem('DARK')) {
  darkMode();
}

function handleSwitch(e) {
  e.preventDefault();

  lightMode();

  if (refs.input.checked) {
    darkMode();
  }
}

function darkMode() {
  refs.body.classList.add('dark-theme');
  localStorage.setItem('DARK', 'dark-theme');
  refs.input.setAttribute('checked', 'true');
}

function lightMode() {
  refs.body.classList.remove('dark-theme');
  localStorage.removeItem('DARK', 'dark-theme');
}

// const checkTheme = localStorage.getItem('Theme');

// console.log(checkTheme);

// switch (checkTheme) {
//   case 'DARK':
//     refs.body.classList.remove('light-theme');
//     refs.body.classList.add('dark-theme');
//     refs.input.setAttribute('checked', 'true');
//     break;

//   case 'LIGHT':
//     refs.body.classList.remove('dark-theme');
//     refs.body.classList.add('light-theme');
//     refs.input.removeAttribute('checked');
//     break;

//   case null:
//     refs.body.classList.add('light-theme');
//     refs.input.removeAttribute('checked');
//     break;
// }

// refs.switch.addEventListener('change', handleSwitch);

// function handleSwitch(e) {
//   e.preventDefault();

//   if (refs.body.classList.contains('light-theme')) {
//     refs.body.classList.replace('light-theme', 'dark-theme');
//     refs.input.setAttribute('checked', 'true');
//     localStorage.setItem('Theme', 'DARK');
//   } else if (refs.body.classList.contains('dark-theme')) {
//     refs.body.classList.replace('dark-theme', 'light-theme');
//     refs.input.removeAttribute('checked');
//     localStorage.setItem('Theme', 'LIGHT');
//   } else {
//     console.log('Cool');
//   }
// }
