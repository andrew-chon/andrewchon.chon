/* Dark mode toggle */
const toggle = document.getElementById('themeButton');
const html = document.documentElement;

//Set dark or light mode theme
const changeTheme = () => {
  const currentTheme = html.getAttribute('data-theme');

  if (currentTheme === 'light') {
    html.setAttribute('data-theme', 'dark');
    toggle.innerHTML = '☼';
  } else {
    html.setAttribute('data-theme', 'light');
    toggle.innerHTML = '☽';
  }
};

//Click functionality
toggle.addEventListener('click', () => {
  changeTheme();
});
