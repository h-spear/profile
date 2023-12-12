function notPrepared() {
    alert('준비중입니다');
}
const body = document.querySelector('body');

const toggleBtn = document.querySelector('.btn-toggle');
const toggleBtnIcon = document.querySelector('.btn__icon');

const changeTheme = () => {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        toggleBtnIcon.classList.remove('fa-moon');
        toggleBtnIcon.classList.add('fa-sun');
        setCookie('theme-color', 'light', 30);
    } else {
        body.classList.add('dark');
        toggleBtnIcon.classList.add('fa-moon');
        toggleBtnIcon.classList.remove('fa-sun');
        setCookie('theme-color', 'dark', 30);
    }
};

toggleBtn.addEventListener('click', changeTheme);
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
