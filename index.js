const express = require('express');
const path = require('path'); // Include the path module
const app = express();

app.use(express.urlencoded({ extended: true }));

// https://vercel.com/docs/rest-api#endpoints/deployments/get-a-deployment-by-id-or-url
const deploymentId = 'dpl_8ZQNkgXXt9V4vNf8kQTSLQhDdAr6' // replace with your own
// https://vercel.com/support/articles/how-do-i-use-a-vercel-api-access-token
const accessToken = process.env.VERCEL_ACCESS_TOKEN
const result = await fetch(
    https://api.vercel.com/v13/deployments/${deploymentId},
    {
        method: 'GET',
        headers: {
            Authorization: Bearer ${accessToken},
        }
    }
);

// ms since epoch for when the deployment finished
const { ready } = await result.json() // 1650903484801
// convert to human-readable date
const lastDeployedTime = new Date(ready).toLocaleString()
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
