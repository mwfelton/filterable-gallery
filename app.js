const controlButton = document.querySelectorAll('.control')
const card = document.querySelectorAll('.card')
const divs = document.querySelectorAll('div')

controlButton.forEach(button => button.addEventListener('click', (e) => {

    card.forEach(card => card.style.display = "none")
    const att = button.getAttribute("data-location")

    for (let i = 0; i <= divs.length; i++){
        if (divs[i].classList.contains(`${att}`)){
            divs[i].style.display = 'block'
        }
    }
}))