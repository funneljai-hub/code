const https = require('https');

// Function to ban a player
function banPlayer(username, durationInMinutes) {
  // Data to be sent
  const data = JSON.stringify({ username, duration: durationInMinutes });

  // HTTPS request options
  const options = {
    hostname: 'funnel-banlist.onrender.com',
    path: '/api/ban',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  };

  // Create a request
  const req = https.request(options, (res) => {
    console.log(`Status code: ${res.statusCode}`);
    
    // Listen for data
    res.on('data', (chunk) => {
      console.log(`Response: ${chunk}`);
    });
  });

  // Handle error
  req.on('error', (error) => {
    console.error(`Error banning player: ${error.message}`);
  });

  // Send the request with the data
  req.write(data);
  req.end();
}
