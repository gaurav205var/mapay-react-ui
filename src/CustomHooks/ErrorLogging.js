// useErrorLogging.js
import { useEffect } from 'react';
import logError from '../Utility/Logger';

const useErrorLogging = () => {
  useEffect(() => {
    const handleError = (error) => {
      logError(error);
      // Optionally, you can perform additional actions here
    };

    // Attach the error handler to the global window object
    window.addEventListener('error', handleError);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []); // This effect runs once when the component mounts
};

export default useErrorLogging;
