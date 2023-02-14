const btnEl = document.getElementById('btn')
const asideEl = document.getElementById('aside-menu')
const closeEl = document.getElementById('close-icon')
const themeEl = document.querySelector('.right-icons')



btnEl.addEventListener('click', () => {
    asideEl.style.display = 'block'
})

closeEl.addEventListener('click', () =>{
    asideEl.style.display = 'none'
})

themeEl.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables')
})