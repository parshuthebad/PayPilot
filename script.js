// Function to handle scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target); // Stop observing once it appears
        }
    });
}, observerOptions);

// Select all elements with fade-in class
const faders = document.querySelectorAll('.fade-in');
faders.forEach(fader => {
    observer.observe(fader);
});