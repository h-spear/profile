function notPrepared() {
    alert('준비중입니다');
}

const changeBtn = document.querySelector('.theme-change-btn');
const changeIcon = document.querySelector('.theme-change-btn-icon');
const body = document.querySelector('body');

const changeTheme = () => {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        changeIcon.classList.add('fa-moon');
        changeIcon.classList.remove('fa-sun');
        setCookie('theme-color', 'light', 30);
    } else {
        body.classList.add('dark');
        changeIcon.classList.remove('fa-moon');
        changeIcon.classList.add('fa-sun');
        setCookie('theme-color', 'dark', 30);
    }
};

changeBtn.addEventListener('click', changeTheme);
const themeColor = getCookie('theme-color');
if (themeColor === null || themeColor === 'dark') {
    changeTheme();
}

/* cookie */
function setCookie(name, value, exp) {
    var date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie =
        name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
}

function getCookie(name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? value[2] : null;
}
