const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // Use Render's assigned port

// Serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});