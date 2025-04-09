const openModalBtn = document.getElementById("btn-get");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".modal_close");
const modalContent = document.querySelector(".modal_content");

let modalShow = false;

function openModal() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  modalShow = true;
}

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "";
}

modal.onclick = (event) => {
  if (event.target === modal) {
    closeModal();
  }
};

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

window.addEventListener('scroll', () => {
  if (!modalShow && (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    openModal();
  }
});

setTimeout(openModal, 10000);
