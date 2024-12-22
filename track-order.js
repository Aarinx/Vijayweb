document.addEventListener('DOMContentLoaded', () => {
    const trackOrderForm = document.getElementById('track-order-form');
    const orderStatus = document.getElementById('order-status');

    trackOrderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const orderId = document.getElementById('order-id').value;
        
        // Simulated order tracking (replace with actual API call)
        const orderData = simulateOrderTracking(orderId);
        
        if (orderData) {
            displayOrderStatus(orderData);
        } else {
            alert('Order not found. Please check your Order ID.');
        }
    });

    function simulateOrderTracking(orderId) {
        try {
            // API call logic
        } catch (error) {
            console.error('Error tracking order:', error);
            // Show user-friendly error message
        }
    }

    function displayOrderStatus(orderData) {
        orderStatus.style.display = 'block';
        const statusSteps = document.querySelectorAll('.status-step');
        statusSteps.forEach(step => step.querySelector('i').className = 'fas fa-circle');

        let currentStep;
        switch (orderData.status) {
            case 'processing':
                currentStep = 1;
                break;
            case 'shipped':
                currentStep = 2;
                break;
            case 'delivered':
                currentStep = 3;
                break;
            default:
                currentStep = 0;
        }

        for (let i = 0; i <= currentStep; i++) {
            statusSteps[i].querySelector('i').className = 'fas fa-check-circle';
        }

        document.querySelector('#estimated-delivery span').textContent = orderData.estimatedDelivery;
    }
});
