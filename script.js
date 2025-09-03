document.addEventListener('DOMContentLoaded', function() {
    // --- Theme Switcher --- //
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;

    // Function to apply theme from localStorage
    const applyTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-mode');
            themeSwitch.checked = true;
        } else {
            body.classList.remove('light-mode');
            themeSwitch.checked = false;
        }
    };

    // Event listener for the theme switch
    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Apply theme on initial load
    applyTheme();

    // --- Typing Effect --- //
    const typingElement = document.getElementById('typing-effect');
    if (typingElement) {
        const words = ["Web Developer", "Desainer Grafis", "Mahasiswa", "Pecinta Teknologi"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                typingElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                setTimeout(() => isDeleting = true, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
            
            const typingSpeed = isDeleting ? 100 : 200;
            setTimeout(type, typingSpeed);
        }

        type();
    }
});
