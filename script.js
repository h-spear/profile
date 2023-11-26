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
        deleteCookie('theme-dark');
    } else {
        body.classList.add('dark');
        changeIcon.classList.remove('fa-moon');
        changeIcon.classList.add('fa-sun');
        setCookie('theme-dark', 'true', 30);
    }
};

changeBtn.addEventListener('click', changeTheme);
const themeDark = getCookie('theme-dark');
if (themeDark != null && themeDark === 'true') {
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

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
