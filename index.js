const express = require('express');
const app = express();
const PORT = process.env.PORT || 3005;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic routes
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Demo Express Server!',
        status: 'Server is running successfully'
    });
});

app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString()
    });
});

app.get('/api/hello/:name?', (req, res) => {
    const name = req.params.name || 'Guest';
    res.json({
        message: `Hello, ${name}!`
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: 'Route not found'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Try visiting:`);
    console.log(`  - http://localhost:${PORT}/`);
    console.log(`  - http://localhost:${PORT}/api/health`);
    console.log(`  - http://localhost:${PORT}/api/hello/YourName`);
});
