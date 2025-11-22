// Contact Form Validation and Handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            // Basic validation
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            // Clear previous error states
            [name, email, subject, message].forEach(field => {
                field.classList.remove('error', 'success');
            });
            
            // Validate name
            if (name.value.trim().length < 2) {
                name.classList.add('error');
                isValid = false;
            } else {
                name.classList.add('success');
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                email.classList.add('error');
                isValid = false;
            } else {
                email.classList.add('success');
            }
            
            // Validate subject
            if (!subject.value) {
                subject.classList.add('error');
                isValid = false;
            } else {
                subject.classList.add('success');
            }
            
            // Validate message
            if (message.value.trim().length < 10) {
                message.classList.add('error');
                isValid = false;
            } else {
                message.classList.add('success');
            }
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill out all required fields correctly.');
            }
        });
        
        // Real-time validation on blur
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.value.trim()) {
                    this.classList.add('success');
                    this.classList.remove('error');
                }
            });
        });
    }
});
