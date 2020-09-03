/* Dark mode toggle */
const toggle = document.getElementById('themeButton');
const html = document.documentElement;
const lookingTag = document.getElementById('lookingTag');
const educationTag = document.getElementsByClassName('educationTag')
console.log("educationTag", educationTag)
const experienceTag = document.getElementsByClassName('experienceTag')


//Set dark or light mode theme
const changeTheme = () => {
  const currentTheme = html.getAttribute('data-theme');

  if (currentTheme === 'light') {
    html.setAttribute('data-theme', 'dark');
    toggle.innerHTML = '☼';
    lookingTag.className = 'is-primary is-light mb-12 tag';
    for (let i = 0; i < educationTag.length; i++) {
      educationTag[i].className = 'educationTag tag is-danger is-light ml-5'
    }
    for (let i = 0; i < experienceTag.length; i++) {
      experienceTag[i].className = 'experienceTag tag is-info is-light ml-5'
    }
  } else {
    html.setAttribute('data-theme', 'light');
    toggle.innerHTML = '☽';
    lookingTag.className = 'is-primary mb-12 tag';
    for (let i = 0; i < educationTag.length; i++) {
      educationTag[i].className = 'educationTag tag is-danger ml-5'
    }
    for (let i = 0; i < experienceTag.length; i++) {
      experienceTag[i].className = 'experienceTag tag is-info ml-5'
    }
  }
};

//Click functionality
toggle.addEventListener('click', () => {
  changeTheme();
});
