const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector("body");

// Initialize the gradient on page load
document.addEventListener('DOMContentLoaded', () => {
    setGradient();
    // Add animation classes to elements
    document.querySelectorAll('.color-picker-wrapper').forEach((wrapper, index) => {
        wrapper.style.animation = `slideIn 0.5s ease-out ${index * 0.2}s forwards`;
        wrapper.style.opacity = '0';
    });
});

function setGradient() {
    const gradient = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    
    // Smoothly transition the background
    body.style.background = gradient;
    
    // Update the CSS text with a smooth transition
    css.textContent = `background: ${gradient};`;
    
    // Add a subtle animation to the color display
    css.style.animation = 'none';
    css.offsetHeight; // Trigger reflow
    css.style.animation = 'fadeIn 0.3s ease-out forwards';
}

// Add event listeners with debouncing for smoother updates
let timeout;
function debouncedSetGradient() {
    clearTimeout(timeout);
    timeout = setTimeout(setGradient, 10);
}

color1.addEventListener("input", debouncedSetGradient);
color2.addEventListener("input", debouncedSetGradient);

// Add hover effect to color pickers
[color1, color2].forEach(picker => {
    picker.addEventListener('mouseenter', () => {
        picker.style.transform = 'scale(1.05)';
    });
    
    picker.addEventListener('mouseleave', () => {
        picker.style.transform = 'scale(1)';
    });
});


