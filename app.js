/* Dark mode toggle */
const toggle = document.getElementById('themeButton');
const html = document.documentElement;
const tag = document.getElementById('tagStatus');

//Set dark or light mode theme
const changeTheme = () => {
  const currentTheme = html.getAttribute('data-theme');

  if (currentTheme === 'light') {
    html.setAttribute('data-theme', 'dark');
    toggle.innerHTML = '☼';
    tag.className = 'is-danger mb-12 tag';
  } else {
    html.setAttribute('data-theme', 'light');
    toggle.innerHTML = '☽';
    tag.className = 'is-danger is-light mb-12 tag';
  }
};

//Click functionality
toggle.addEventListener('click', () => {
  changeTheme();
});
