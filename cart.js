document.addEventListener('DOMContentLoaded', function() {
    // Quantity Controls
    document.querySelectorAll('.quantity-control').forEach(control => {
        const input = control.querySelector('.qty-input');
        const minusBtn = control.querySelector('.minus');
        const plusBtn = control.querySelector('.plus');

        minusBtn.addEventListener('click', () => {
            const currentValue = parseInt(input.value);
            if (currentValue > 1) {
                input.value = currentValue - 1;
                updateCartTotal();
            }
        });

        plusBtn.addEventListener('click', () => {
            const currentValue = parseInt(input.value);
            if (currentValue < 10) {
                input.value = currentValue + 1;
                updateCartTotal();
            }
        });

        input.addEventListener('change', () => {
            let value = parseInt(input.value);
            if (isNaN(value) || value < 1) value = 1;
            if (value > 10) value = 10;
            input.value = value;
            updateCartTotal();
        });
    });

    // Remove Items
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const item = this.closest('.cart-item');
            item.style.opacity = '0';
            setTimeout(() => {
                item.remove();
                updateCartTotal();
                updateItemCount();
                checkEmptyCart();
            }, 300);
        });
    });

    // Update cart total
    function updateCartTotal() {
        // Add validation before calculations
    }

    // Update item count
    function updateItemCount() {
        const itemCount = document.querySelectorAll('.cart-item').length;
        document.querySelector('.item-count').textContent = `(${itemCount} Items)`;
    }

    // Check for empty cart
    function checkEmptyCart() {
        const items = document.querySelectorAll('.cart-item');
        const cartSection = document.querySelector('.cart-section');
        
        if (items.length === 0) {
            cartSection.innerHTML = `
                <div class="empty-cart-message">
                    <i class="fas fa-shopping-cart fa-3x"></i>
                    <p>Your cart is empty</p>
                    <a href="shop.html" class="shop-btn">Continue Shopping</a>
                </div>
            `;
        }
    }
}); 