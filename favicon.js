class FaviconManager {
    constructor() {
        this.createFavicons();
        this.updateFavicon();
        
        // Listen for theme changes
        document.addEventListener('themeChanged', () => {
            this.updateFavicon();
        });
    }

    createFavicons() {
        const sizes = [16, 32, 192, 512];
        const faviconPath = 'favicon/';
        
        sizes.forEach(size => {
            const canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext('2d');
            
            // Draw background
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.roundRect(0, 0, size, size, size * 0.125);
            ctx.fill();
            
            // Draw text
            ctx.fillStyle = '#000000';
            ctx.font = `bold ${size * 0.5}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('VK', size / 2, size / 2);
            
            // Save the favicon
            const link = document.createElement('link');
            link.type = 'image/png';
            link.rel = 'icon';
            link.href = canvas.toDataURL('image/png');
            link.sizes = `${size}x${size}`;
            document.head.appendChild(link);
            
            // Save apple touch icon
            if (size === 192) {
                const appleLink = document.createElement('link');
                appleLink.rel = 'apple-touch-icon';
                appleLink.href = canvas.toDataURL('image/png');
                document.head.appendChild(appleLink);
            }
        });
    }

    updateFavicon() {
        const theme = document.documentElement.getAttribute('data-theme');
        const backgroundColor = theme === 'dark' ? '#000000' : '#FFD700';
        const textColor = theme === 'dark' ? '#FFD700' : '#000000';
        
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');
        
        // Draw background
        ctx.fillStyle = backgroundColor;
        ctx.beginPath();
        ctx.roundRect(0, 0, 32, 32, 4);
        ctx.fill();
        
        // Draw text
        ctx.fillStyle = textColor;
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('VK', 16, 16);
        
        // Update favicon
        const links = document.querySelectorAll('link[rel*="icon"]');
        links.forEach(link => {
            link.href = canvas.toDataURL('image/png');
        });
    }
}

// Initialize favicon manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FaviconManager();
}); 