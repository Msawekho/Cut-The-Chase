const express = require('express');
const cors = require('cors');
const db = require('./database/db');

const app = express();
app.use(cors());
app.use(express.json());

// POST endpoint to onboard a new professional
app.post('/api/professionals', (req, res) => {
    const { name, email, phone, skills, experience } = req.body;
    const sql = `INSERT INTO professionals (name, email, phone, skills, experience) VALUES (?, ?, ?, ?, ?)`;
    const params = [name, email, phone, skills, experience];

    db.run(sql, params, function (err) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({ message: 'Professional onboarded successfully!', id: this.lastID });
    });
});

// GET endpoint to retrieve all professionals
app.get('/api/professionals', (req, res) => {
    const sql = 'SELECT * FROM professionals';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({ professionals: rows });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.post('/api/smes', async (req, res) => {
    const { smeName, industry, address, contactPerson, contactEmail, contactPhone } = req.body;
    try {
        await db('smes').insert({ smeName, industry, address, contactPerson, contactEmail, contactPhone });
        res.json({ message: 'SME onboarded successfully!' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Failed to onboard SME' });
    }
});

