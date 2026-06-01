document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks! Your table booking request has been received.');
    this.reset();
});
