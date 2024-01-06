// logger.js
const logError = (error) => {
  // Log the error to the console
  console.error('Custom Logger:', error);

  try {
    // Retrieve existing error logs from localStorage
    const storedErrors = JSON.parse(localStorage.getItem('errorLogs')) || [];

    // Add the new error to the logs
    storedErrors.push({ timestamp: new Date().toISOString(), error: error.message });

    // Save the updated error logs back to localStorage
    localStorage.setItem('errorLogs', JSON.stringify(storedErrors));
  } catch (err) {
    console.error('Error while saving error to localStorage:', err);
  }
};

export default logError;
