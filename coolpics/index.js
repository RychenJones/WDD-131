const h3 = document.querySelector('h3');
const menu = document.querySelector('nav');

h3.addEventListener('click', showMenu);

function showMenu() {
    menu.classList.toggle('hide');
}

const images = document.querySelector('#images');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
images.addEventListener('click', openModal);

function openModal(e) {
// Code to show modal  - Use event parameter 'e'   
    const img = e.target;

    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');

    const full = src.replace('sm', "full");

    modalImage.src = full;
    modalImage.alt = alt;
    modal.showModal();
}

// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
        

