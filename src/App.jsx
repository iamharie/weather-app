import { useEffect, useRef, useState } from "react";

// const location = "Dallas";

function App() {
  // const [loading, isLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const keystroke = useRef();

  function handleClick() {
    const typedLoc = keystroke.current.value;
    setLocation(typedLoc);
  }
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=aa601f7e782dc02a2ada20a7a1d64043`;

  useEffect(() => {
    const searchLocation = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const responseData = await response.json();
        setData(responseData);
        console.log(responseData);
      } catch (error) {
        setError(error);
      }
    };
    searchLocation();
  }, [location]);

  return (
    <>
      <div className="app">
        <div className="search">
          <input
            type="text"
            placeholder="Enter Location..."
            ref={keystroke}
          ></input>
          <button className="btn" onClick={handleClick}>
            click
          </button>
        </div>
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              <h1>60 F</h1>
            </div>
            <div className="description">
              <p>clouds</p>
            </div>
          </div>
          <div className="bottom">
            <div className="feels">
              {/* <p>{data.main.feels_like}</p> */}
              <p className="bold">Feels Like</p>
            </div>
            <div className="humidity">
              {/* <p>{data.main.humidity}%</p> */}
              <p className="bold">Humidity</p>
            </div>
            <div className="wind">
              {/* <p>{data.wind.speed} MPH</p> */}
              <p className="bold">Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
