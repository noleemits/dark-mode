const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
//switch theme dynamically
function switchTheme(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
    }
}
//Event listener
toggleSwitch.addEventListener('change', switchTheme, false);