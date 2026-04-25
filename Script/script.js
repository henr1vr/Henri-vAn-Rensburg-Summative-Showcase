// Script/script.js

// ====================== PROJECT MODAL ======================
const projects = [
    { title: 'WoodWorX', desc: 'WoodworX is a gamified mobile application that allows woodworkers to gain skills and progress in their woodworking journey in a fun and interactive manner.' },
    { title: 'HaptiNav', desc: 'Hapti Nav is a navigation application for visually impaired individuals. It links to a smart watch to use the watch as a multi sensory navigation guide.' },
    { title: 'Ilitha', desc: 'Ilitha Telecommunications required a clean, modern website to showcase their services and communicate professionalism in the telecom sector.' },
    { title: 'Fa Tanimals', desc: 'Fa Tanimals is a concept design for a brand that sells custom 3D sculptures of pets.' },
    { title: 'Explorations', desc: 'This is a collection of creative explorations across illustration, 3D, and digital painting. These projects reflect my love for experimentation and visual storytelling.' }
];

function showProject(index) {
    // Remove any existing modal
    const existing = document.getElementById('project-modal');
    if (existing) existing.remove();

    const project = projects[index];

    const modalHTML = `
        <div class="project-modal" id="project-modal">
            <div class="modal-content">
                <button class="modal-close" onclick="closeModal()">×</button>
                <h3>${project.title}</h3>
                <p>${project.desc}</p>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    if (modal) modal.remove();
}

// ====================== CONTACT FORM ======================
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const modal = document.getElementById('success-modal');
    const modalDetails = document.getElementById('modal-details');
    const closeModalBtn = document.getElementById('close-modal');

    function validateName() {
        const value = nameInput.value.trim();
        if (!value) { nameError.textContent = 'Name is required'; return false; }
        if (!/^[a-zA-Z\s]+$/.test(value)) { nameError.textContent = 'Name can only contain letters and spaces'; return false; }
        nameError.textContent = '';
        return true;
    }

    function validateEmail() {
        const value = emailInput.value.trim();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) { emailError.textContent = 'Email is required'; return false; }
        if (!regex.test(value)) { emailError.textContent = 'Please enter a valid email'; return false; }
        emailError.textContent = '';
        return true;
    }

    function validateMessage() {
        const value = messageInput.value.trim();
        if (!value) { messageError.textContent = 'Message is required'; return false; }
        if (value.length < 10) { messageError.textContent = 'Message must be at least 10 characters'; return false; }
        messageError.textContent = '';
        return true;
    }

    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    messageInput.addEventListener('input', validateMessage);

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateName() && validateEmail() && validateMessage()) {
            modalDetails.innerHTML = `
                <strong>Name:</strong> ${nameInput.value}<br>
                <strong>Email:</strong> ${emailInput.value}<br><br>
                <strong>Message:</strong><br>${messageInput.value}
            `;
            modal.style.display = 'flex';
            form.reset();
        }
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => modal.style.display = 'none');
    }
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.style.display = 'none';
        });
    }
});