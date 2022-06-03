import express from 'express';

// Create the Express app and add middleware
const app = express();
app.use(express.json());

// API route
app.get('/', (req, res) => {
	res.status(200).send('Hello Docker API');
});

// Start the app
app.listen(8080, () => {
	console.log('Listening on port 8080');
});
