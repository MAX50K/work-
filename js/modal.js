const openBtn = document.getElementById("open-modal-btn")
const backdrop = document.getElementById("backdrop")
const closeBtn = document.getElementById("modal__close__button")

openBtn.addEventListener("click", toggleModal)
closeBtn.addEventListener("click", toggleModal)

function toggleModal() {
    backdrop.classList.toggle("active")
}
