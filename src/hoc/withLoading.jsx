import React, { useState, useEffect } from 'react';
const withLoading = (WrappedComponent) => {
    return function WithLoadingComponent({ isLoading, ...props }) {
      const [loading, setLoading] = useState(isLoading);
  
      useEffect(() => {
        if (isLoading) {
          const timer = setTimeout(() => setLoading(false), 1000);
          return () => clearTimeout(timer);
        }
      }, [isLoading]);
  
      if (loading) {
        return (
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        );
      }
  
      return <WrappedComponent {...props} />;
    };
  };

  export default withLoading;