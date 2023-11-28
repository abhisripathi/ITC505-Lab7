// server.js or index.js (at the project root or inside an `/api` directory)
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

// Add a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to my Node.js project!'); // You can adjust this to serve an HTML page if needed
});

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
//   });
  
app.get('/cs212/homework/8', (req, res) => {
    res.sendFile('/index.html', { root: '.' }); // The root option specifies the root directory for the sendFile method.
});

app.post('/cs212/homework/8', (req, res) => {
    const { adjective, pluralNoun, personName, verb, noun } = req.body;
    const madLib = `Today, I saw a ${adjective} ${pluralNoun} which made me think of ${personName}. 
                    Then I decided to ${verb} by the ${noun}.`;

    res.send(madLib);
});

module.exports = app;
