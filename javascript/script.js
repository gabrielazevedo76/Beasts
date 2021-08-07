const modalOverlay = document.querySelector(".modal-overlay")
const wildImagesOpen = document.querySelectorAll(".wild_images")
const modalContent = document.querySelector(".modal-content")


wildImagesOpen.forEach(img => {
    img.addEventListener("click", () => {
        img.classList.add()
    })
})




for (let buyButton of buyButtons) {
    buyButton.addEventListener("click", () => {
        const buyButtonId = buyButton.getAttribute("id")
        window.location.href = `/pacotes-info?id=${buyButtonId}`
    })
}



for (let card of cards) {
    card.addEventListener("click", function(){
        modalOverlay.classList.add("active")
        let cardImg = card.getAttribute("src")
        if(modalOverlay.classList.contains("active")){
            modalOverlay.querySelector("img").src = `${cardImg}`
        }

    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("img").src = ``
})
