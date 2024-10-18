document.getElementById('emailForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    try {
        const response = await fetch('http://localhost:5000/api/emails', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        });
        const data = await response.json();
        alert(data.message);
        document.getElementById('email').value = '';
    } catch (error) {
        console.error('Error:', error);
    }
});

document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('contactEmail').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch('http://localhost:5000/api/contacts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, phone, message }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        alert(data.message);
        document.getElementById('contactForm').reset(); 
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error submitting the contact form.');
    }
});
