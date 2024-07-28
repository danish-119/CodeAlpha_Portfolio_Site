console.log("Welcome to Danish's Portfolio");

document.addEventListener('DOMContentLoaded', () => {
    // Get modal elements
    const modal = document.getElementById('hireModal');
    const btn = document.querySelector('.header-button');
    const span = document.querySelector('.close');
    const form = document.getElementById('hireForm');

    // Show the modal
    btn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Close the modal
    span.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal if clicked outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // Handle form submission logic here
        alert('Form submitted!'); // Just for demonstration
        modal.style.display = 'none';
    });
});

// Download CV Button Functionality
document.querySelector('.download-cv').addEventListener('click', () => {
    window.location.href = './Inventory/Muhammad_Danish.pdf';
});


document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // For demonstration, log the data
        console.log('Form Data:', data);

        contactForm.reset();

    });
});
