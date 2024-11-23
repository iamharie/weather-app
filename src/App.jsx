import { useEffect, useRef, useState } from "react";
import MainScreen from "./MainScreen.jsx";

function App() {
  // const [loading, isLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  const [location, setLocation] = useState("");
  const userInput = useRef();

  function handleClick() {
    const inputLocation = userInput.current.value;
    setLocation(inputLocation);
    userInput.current.value = "";
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=aa601f7e782dc02a2ada20a7a1d64043`;

  useEffect(() => {
    if (!location) return;
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
        setError(error.message);
      }
    };
    searchLocation();
  }, [location]);

  return (
    <>
      <MainScreen handleClick={handleClick} userInput={userInput} data={data} />
    </>
  );
}

export default App;
