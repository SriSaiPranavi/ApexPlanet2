document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        alert('All fields are required!');
        return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
    this.reset();
});
