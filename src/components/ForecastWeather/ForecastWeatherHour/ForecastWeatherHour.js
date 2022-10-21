import "./ForecastWeatherHour.css";

function ConvertDateTo12HFormat(date) {
    let time = "";
    let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    if(hours === 0) {
      hours = 12;
    }
    let am_pm = date.getHours() >= 12 ? "PM" : "AM";
    time = hours + " " + am_pm;
    return time;
};

const ForecastWeatherHour = (props) => {
  var weekday = props.date.toLocaleString("default", { weekday: "long" })
  return (
    <div className="forecast-weather-hour">
      <h2 className="date">{weekday}</h2>
      <h2 className="month">{ConvertDateTo12HFormat(props.date)}</h2>
      <img src={props.icon} alt="" className="icon" />
      <h1 className="temp">{`${props.temp}\u00B0`}</h1>
    </div>
  );
};

export default ForecastWeatherHour;
