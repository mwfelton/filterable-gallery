const controlButton = document.querySelectorAll('.control')
const card = document.querySelectorAll('.card')

controlButton.forEach(button => button.addEventListener('click', (e) => {

    const att = button.getAttribute("data-location")
    for (let i = 0; i <= card.length; i++){
        if (!card[i].classList.contains(`${att}`)){
            card[i].classList.add("hidden")
        } else {
            card[i].classList.remove("hidden")
        }
    }
}))
