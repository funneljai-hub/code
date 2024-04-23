const https = require('https');

// Function to retrieve ban status
function retrieveBanStatus() {
  // HTTPS request options
  const options = {
    hostname: 'funnel-banlist.onrender.com',
    path: '/api/ban',
    method: 'GET'
  };

  // Create a request
  const req = https.request(options, (res) => {
    console.log(`Status code: ${res.statusCode}`);

    // Initialize response data
    let responseData = '';

    // Listen for data
    res.on('data', (chunk) => {
      responseData += chunk;
    });

    // Listen for the end of response
    res.on('end', () => {
      // Parse the JSON response data
      const bannedPlayers = JSON.parse(responseData);
      
      // Output ban status
      console.log('Ban status:');
      bannedPlayers.forEach((player) => {
        console.log(`Username: ${player.username}, Time: ${player.time}`);
      });
    });
  });

  // Handle error
  req.on('error', (error) => {
    console.error(`Error retrieving ban status: ${error.message}`);
  });

  // Send the request
  req.end();
}

// Example usage: Retrieve ban status
retrieveBanStatus();
