// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', async function() {
  try {
    // Fetch the meta.json file from the root of the current domain
    const response = await fetch('/meta.json');
    
    // Check if the response is ok (status in the range 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.status);
    }
    
    // Parse the JSON from the response
    const data = await response.json();
    
    // Log the parsed JSON data to the console using console.info
    console.info('Meta data:', data);
  } catch (error) {
    // Log any errors that occurred during fetch or parsing
    console.error('Error fetching meta data:', error);
  }
});
