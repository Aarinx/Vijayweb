function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', loadHeader);
