const openBtn = document.querySelector('.open-button');
const closeBtn = document.querySelector('.close-button');
const nav = document.querySelectorAll('.nav');

openBtn.addEventListener('click', () => {
    nav.forEach(function f(nav_ele){

        nav_ele.classList.add('visible');
        console.log(nav_ele);
    });
})

closeBtn.addEventListener('click', () => {
    nav.forEach(nav_ele => nav_ele.classList.remove('visible'))
})