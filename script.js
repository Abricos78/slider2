let menuBtns = document.querySelectorAll('.menu-name')

for (let i = 0; i < menuBtns.length; i++) {
    menuBtns[i].addEventListener('click', () => {
        let content = menuBtns[i].nextElementSibling
        hideAll(menuBtns, menuBtns[i])
        if (menuBtns[i].getAttribute('class').search('active') === -1) {
            menuBtns[i].classList.add('active')
            content.style.height = content.scrollHeight + 'px'
        } else {
            menuBtns[i].classList.remove('active')
            content.style.height = '0'
        }
    })
}

function hideAll(arr, elem) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != elem) {
            let content = arr[i].nextElementSibling
            arr[i].classList.remove('active')
            content.style.height = '0'
        }
    }

}