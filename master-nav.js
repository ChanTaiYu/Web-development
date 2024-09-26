document.addEventListener("DOMContentLoaded", function() {
    fetch('master-nav.html')
        .then(response => response.Text())
        .then(data => {
            document.getElementsById('navbar-container').innerHTML = data;
        });
});