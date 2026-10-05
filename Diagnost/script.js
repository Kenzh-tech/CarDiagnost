document.addEventListener("DOMContentLoaded", function() {
    // Получаем все кнопки на странице
    var buttons = document.querySelectorAll("button");

    // Добавляем обработчик события на каждую кнопку
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Действия при нажатии на кнопку
            alert("Button clicked!");
        });
    });
});
// Get the modal
var modal = document.getElementById("bookingModal");

// Get the button that opens the modal
var btn = document.querySelector("button"); // Adjust this if there are multiple buttons

// Get the <span> element that closes the modal
var span = document.getElementById("closeModal");

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// JavaScript for Modal
const modal = document.getElementById("bookingModal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
