import React, { useState, useEffect } from "react";

const App = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <p>You've been on this page for {time} seconds.</p>
    </div>
  );
};

export default App;
