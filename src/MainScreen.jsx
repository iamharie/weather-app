import { FaArrowRight } from "react-icons/fa";

import { TiThermometer } from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";
import { TiWeatherWindy } from "react-icons/ti";

export default function MainScreen({ handleClick, userInput, data }) {
  return (
    <div className="app">
      <div className="search">
        <input type="text" placeholder="Enter City..." ref={userInput}></input>
        <button className="btn" onClick={handleClick}>
          <FaArrowRight color="yellow" />
        </button>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()}°F</p>
              ) : null}
              <p className="bold">
                <TiThermometer />
                <p>Feels</p>
              </p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p className="bold">
                <WiHumidity />
                <p>Humidity</p>
              </p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p className="bold">
                <TiWeatherWindy />
                <p>Wind</p>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
