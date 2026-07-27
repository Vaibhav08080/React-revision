import { useState, useEffect, useRef } from "react";

export default function TrafficLight() {

  // Current light
  const [light, setLight] = useState("red");

  // Is traffic light currently running?
  const [running, setRunning] = useState(false);

  // Stores the interval ID
  // Changing this DOES NOT cause a re-render
  const intervalRef = useRef(null);

  // Order of lights
  const lights = ["red", "orange", "green"];

  useEffect(() => {

    // If Start hasn't been pressed, do nothing
    if (!running) return;

    // Start an interval
    intervalRef.current = setInterval(() => {

      // Functional update because next value depends on previous value
      setLight((prevLight) => {

        // Find current light index
        const currentIndex = lights.indexOf(prevLight);

        // Calculate next index
        const nextIndex = (currentIndex + 1) % lights.length;

        // Return next light
        return lights[nextIndex];
      });

    }, 100);

    // Cleanup
    // Runs when component unmounts
    // OR before effect runs again
    return () => {
      clearInterval(intervalRef.current);
    };

  }, [running]);

  function start() {
    setRunning(true);
  }

  function stop() {
    clearInterval(intervalRef.current);
    setRunning(false);
  }

  return (
    <div>

      <h1>{light.toUpperCase()}</h1>

      {/* Traffic Light */}
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: light,
          border: "2px solid black",
          marginBottom: "20px"
        }}
      ></div>

      <button onClick={start}>Start</button>

      <button onClick={stop}>Stop</button>

    </div>
  );
}