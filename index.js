const express = require('express');
const path = require('path'); // Include the path module
const app = express();

app.use(express.urlencoded({ extended: true }));

// Serve index.html at the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Your existing route for /cs212/homework/8
app.get('/cs212/homework/8', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Your POST route for /cs212/homework/8
app.post('/cs212/homework/8', (req, res) => {
    const { adjective, pluralNoun, personName, verb, noun } = req.body;
    const madLib = `Today, I saw a ${adjective} ${pluralNoun} which made me think of ${personName}. 
                    Then I decided to ${verb} by the ${noun}.`;

    res.send(madLib);
});

module.exports = app;
