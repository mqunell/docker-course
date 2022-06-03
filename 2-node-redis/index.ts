import express from 'express';
import { createClient } from 'redis';

// Create the Express app and add middleware
const app = express();
app.use(express.json());

// Connect to Redis and initialize visits
const client = createClient({
	// Local Node to Docker Redis
	// url: 'redis://localhost:6379',

	// Docker Node to Docker Redis
	url: 'redis://redis-server',
});

client.on('ready', () => {
	console.log('Connected to redis!');
	client.set('visits', 0);
});

(async () => await client.connect())();

// API routes
app.get('/redis', (req, res) => {
	client
		.get('visits')
		.then((visits: string | null) => {
			if (!visits) {
				res.send('What is a "visits"?');
				return;
			}

			res.send('Number of visits is ' + visits);
			client.set('visits', parseInt(visits) + 1);
		})
		.catch((error: any) => {
			res.status(500).send(error);
		});
});

app.get('/crash-demo', (req, res) => {
	// Terminate the process with status 0 ('ok')
	process.exit(0);
});

// Start the app
app.listen(8080, () => {
	console.log('Listening on port 8080');
});
