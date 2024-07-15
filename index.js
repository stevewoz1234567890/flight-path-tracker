const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

app.post('/calculate', (req, res) => {
    const flights = req.body.flights;
    const flightPath = calculateFlightPath(flights);
    res.json(flightPath);
});

const calculateFlightPath = (flights) => {
    let flightMap = new Map();
    let destinations = new Set();
    let startPoint = '';

    // Build the flight map and destination set
    flights.forEach(flight => {
        const [src, dest] = flight;
        flightMap.set(src, dest);
        destinations.add(dest);
    });

    // Find the starting point
    flightMap.forEach((_, key) => {
        if (!destinations.has(key)) {
            startPoint = key;
        }
    });

    // Generate the complete flight path
    let result = [];
    while (startPoint) {
        result.push(startPoint);
        startPoint = flightMap.get(startPoint);
    }

    // Return only the starting and ending points
    return [result[0], result[result.length - 1]];
};

app.listen(port, () => {
    console.log(`Flight path tracker API listening on port ${port}`);
});
