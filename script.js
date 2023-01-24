//function to get element and create varible
function getElement(element){
    return document.querySelector(element);
}
const nav = getElement('.nav');
const toggleSwitch = getElement('.theme-switch input[type="checkbox"]');
const toggleIcon = getElement('#toggle-icon');
const image1 = getElement('#image1');
const image2 = getElement('#image2');
const image3 = getElement('#image3');
const textBox = getElement('.text-box');

//function to swith image mode
function imageMode(color){
    image1.src = `img/undraw_proud_coder_${color}.svg`; 
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

//toggle dark and light mode

const DARK_THEME = true
const LIGHT_THEME = false

function toggleDarkLightMode(isDark){
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';    
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark ? imageMode('dark') : imageMode('light');
}

//switch theme dynamically
function switchTheme(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem("theme", "dark");
        toggleDarkLightMode(DARK_THEME);
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem("theme", "light");
        toggleDarkLightMode(LIGHT_THEME);
    }
}
//Event listener
toggleSwitch.addEventListener('change', switchTheme, false);

//Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
        toggleDarkLightMode(DARK_THEME);
    }
}

