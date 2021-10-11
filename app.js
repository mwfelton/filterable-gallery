const controlButton = document.querySelectorAll('.control')
const card = document.querySelectorAll('.card')

controlButton.forEach(button => button.addEventListener('click', (e) => {

    const att = button.getAttribute("data-location")
    for (let i = 0; i <= card.length; i++){
        if (!card[i].classList.contains(`${att}`)){
            card[i].classList.add('fade-out')
            setTimeout(() => {
                card[i].style.display = 'none'
            }, 300);
        } else {
            card[i].classList.remove('fade-out')
            setTimeout(() => {
                card[i].style.display = 'block'
            }, 300);
        }
    }

}))





//old -----------

// controlButton.forEach(button => button.addEventListener('click', (e) => {

//     card.forEach(card => card.style.display = "none")
//     const att = button.getAttribute("data-location")

//     for (let i = 0; i <= divs.length; i++){
//         if (divs[i].classList.contains(`${att}`)){
//             divs[i].style.display = 'block'
//         }
//     }
// }))