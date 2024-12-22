class CustomCursor {
    constructor() {
        this.cursor = this.createCursorElement('custom-cursor');
        this.follower = this.createCursorElement('custom-cursor-follower');
        this.cursorPos = { x: 0, y: 0 };
        this.followerPos = { x: 0, y: 0 };
        this.init();
        this.render();
    }

    createCursorElement(className) {
        const element = document.createElement('div');
        element.className = className;
        document.body.appendChild(element);
        return element;
    }

    init() {
        document.addEventListener('mousemove', (e) => {
            this.cursorPos.x = e.clientX;
            this.cursorPos.y = e.clientY;
        });

        // Add hover effects for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => this.expand());
            el.addEventListener('mouseleave', () => this.shrink());
        });

        // Listen for theme changes
        document.addEventListener('themeChanged', () => {
            this.pulse();
        });
    }

    render() {
        // Smooth follower movement
        this.followerPos.x += (this.cursorPos.x - this.followerPos.x) * 0.1;
        this.followerPos.y += (this.cursorPos.y - this.followerPos.y) * 0.1;

        // Update cursor positions
        this.cursor.style.left = `${this.cursorPos.x}px`;
        this.cursor.style.top = `${this.cursorPos.y}px`;
        this.follower.style.left = `${this.followerPos.x}px`;
        this.follower.style.top = `${this.followerPos.y}px`;

        // Continue animation
        requestAnimationFrame(() => this.render());
    }

    expand() {
        this.cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        this.follower.style.transform = 'translate(-50%, -50%) scale(0.5)';
    }

    shrink() {
        this.cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        this.follower.style.transform = 'translate(-50%, -50%) scale(1)';
    }

    pulse() {
        this.cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        this.follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
        setTimeout(() => {
            this.cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            this.follower.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 200);
    }
}

// Initialize cursor when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CustomCursor();
}); 