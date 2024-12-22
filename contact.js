document.addEventListener('DOMContentLoaded', function() {
    // Form Submission Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            // Show loading state
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Success message
                alert('Thank you for your message! We will get back to you soon.');
                
                // Reset form
                contactForm.reset();
                
                // Restore button state
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // Business Hours Status
    function updateBusinessStatus() {
        const statusBadge = document.querySelector('.status-badge');
        if (!statusBadge) return;

        const now = new Date();
        const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
        const hour = now.getHours();

        let isOpen = false;

        if (day === 0) { // Sunday
            isOpen = hour >= 9 && hour < 13;
        } else if (day >= 1 && day <= 6) { // Monday to Saturday
            isOpen = hour >= 9 && hour < 20;
        }

        statusBadge.textContent = isOpen ? 'Currently Open' : 'Currently Closed';
        statusBadge.className = `status-badge ${isOpen ? 'open' : 'closed'}`;
    }

    // Update status immediately and every minute
    updateBusinessStatus();
    setInterval(updateBusinessStatus, 60000);

    // Form Input Validation
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('invalid', function(e) {
            e.preventDefault();
            this.classList.add('error');
        });

        input.addEventListener('input', function() {
            this.classList.remove('error');
        });
    });
}); 