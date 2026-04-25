// script.js

//  PROJECT MODAL 
const projects = [
    { 
        title: 'WoodWorX', 
        desc: 'WoodworX is a gamified mobile application that allows woodworkers to gain skills and progress in their woodworking journey in a fun and interactive manner.' 
    },
    { 
        title: 'HaptiNav', 
        desc: 'Hapti Nav is a navigation application for visually impaired individuals. It links to a smart watch to use the watch as a multi sensory navigation guide.' 
    },
    { 
        title: 'Ilitha', 
        desc: 'Ilitha Telecommunications required a clean, modern website to showcase their services and communicate professionalism in the telecom sector.' 
    },
    { 
        title: 'Fa Tanimals', 
        desc: 'Fa Tanimals is a concept design for a brand that sells custom 3D sculptures of pets.' 
    },
    { 
        title: 'Explorations', 
        desc: 'This is a collection of creative explorations across illustration, 3D, and digital painting. These projects reflect my love for experimentation and visual storytelling.' 
    }
];

let currentModal = null;

function showProject(index) {
    if (currentModal) currentModal.remove();

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
    currentModal = document.getElementById('project-modal');

    // Close when clicking outside the modal content
    currentModal.addEventListener('click', function(e) {
        if (e.target === currentModal) closeModal();
    });
}

function closeModal() {
    if (currentModal) {
        currentModal.remove();
        currentModal = null;
    }
}

// CONTACT FORM
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

    // Real-time validation
    function validateName() {
        const value = nameInput.value.trim();
        if (!value) {
            nameError.textContent = 'Name is required';
            return false;
        }
        if (!/^[a-zA-Z\s]+$/.test(value)) {
            nameError.textContent = 'Name can only contain letters and spaces';
            return false;
        }
        nameError.textContent = '';
        return true;
    }

    function validateEmail() {
        const value = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
            emailError.textContent = 'Email is required';
            return false;
        }
        if (!emailRegex.test(value)) {
            emailError.textContent = 'Please enter a valid email address';
            return false;
        }
        emailError.textContent = '';
        return true;
    }

    function validateMessage() {
        const value = messageInput.value.trim();
        if (!value) {
            messageError.textContent = 'Message is required';
            return false;
        }
        if (value.length < 10) {
            messageError.textContent = 'Message must be at least 10 characters';
            return false;
        }
        messageError.textContent = '';
        return true;
    }

    // Live validation
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    messageInput.addEventListener('input', validateMessage);

    // Form submit
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();

        if (isNameValid && isEmailValid && isMessageValid) {
            modalDetails.innerHTML = `
                <strong>Name:</strong> ${nameInput.value}<br>
                <strong>Email:</strong> ${emailInput.value}<br><br>
                <strong>Message:</strong><br>
                ${messageInput.value}
            `;
            modal.style.display = 'flex';
            form.reset();
        }
    });

    // Close success modal
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    }

    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) modal.style.display = 'none';
        });
    }
});