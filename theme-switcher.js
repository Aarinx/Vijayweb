class ThemeSwitcher {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'dark';
        this.initializeTheme();
        setTimeout(() => this.addHeaderThemeToggle(), 500);
    }

    initializeTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        document.body.classList.toggle('light-mode', this.theme === 'light');
    }

    addHeaderThemeToggle() {
        // Wait for header to be loaded
        const checkHeader = setInterval(() => {
            const iconsContainer = document.querySelector('.icons-container');
            if (iconsContainer) {
                clearInterval(checkHeader);
                this.createThemeToggle(iconsContainer);
            }
        }, 100);
    }

    createThemeToggle(container) {
        // Create theme toggle link
        const themeToggle = document.createElement('a');
        themeToggle.className = 'icon-link theme-toggle';
        themeToggle.innerHTML = `
            <i class="fas ${this.theme === 'dark' ? 'fa-sun' : 'fa-moon'} fa-2x golden-icon"></i>
            <span class="icon-name">Theme</span>
        `;

        // Add click event
        themeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleTheme();
            // Update icon
            const icon = themeToggle.querySelector('i');
            icon.className = `fas ${this.theme === 'dark' ? 'fa-sun' : 'fa-moon'} fa-2x golden-icon`;
        });

        // Add to header
        container.appendChild(themeToggle);
    }

    toggleTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', this.theme);
        this.initializeTheme();

        // Dispatch custom event for other components
        const event = new CustomEvent('themeChanged', { 
            detail: { theme: this.theme },
            bubbles: true 
        });
        document.dispatchEvent(event);
    }
}

// Initialize theme switcher when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeSwitcher();
}); 