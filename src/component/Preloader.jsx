import React, { useEffect, useState } from 'react';

function Preloader() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length < 3 ? prev + '.' : ''));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex justify-center item-center mt-48'>
       <img src=".\Image\loader.gif" alt="Loading..." />
    </div>
  );
}

export default Preloader;
