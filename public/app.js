function onboardForm() {
    return {
        name: '',
        email: '',
        phone: '',
        skills: '',
        experience: null,
        message: '',

        async submitForm() {
            const data = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                skills: this.skills,
                experience: parseInt(this.experience),
            };

            try {
                const response = await fetch('http://localhost:5000/api/professionals', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                });

                const result = await response.json();
                this.message = result.message;

                // Clear form inputs after submission
                this.name = '';
                this.email = '';
                this.phone = '';
                this.skills = '';
                this.experience = null;
            } catch (error) {
                console.error('Error:', error);
                this.message = 'Error submitting the form. Please try again.';
            }
        },
    };
}

function onboardSMEForm() {
    return {
        smeName: '',
        industry: '',
        address: '',
        contactPerson: '',
        contactEmail: '',
        contactPhone: '',
        smeMessage: '',

        async submitSMEForm() {
            const data = { smeName: this.smeName, industry: this.industry, address: this.address, contactPerson: this.contactPerson, contactEmail: this.contactEmail, contactPhone: this.contactPhone };
            try {
                const response = await fetch('http://localhost:5000/api/smes', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                });
                const result = await response.json();
                this.smeMessage = result.message;

                // Clear form inputs after submission
                this.smeName = '';
                this.industry = '';
                this.address = '';
                this.contactPerson = '';
                this.contactEmail = '';
                this.contactPhone = '';
            } catch (error) {
                console.error('Error:', error);
                this.smeMessage = 'Error submitting the SME form. Please try again.';
            }
        },
    };
}
