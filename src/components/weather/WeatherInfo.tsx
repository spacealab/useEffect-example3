import WeatherIcon from "./WeatherIcon";

interface Props {
    weather: weather,
}

function WeatherInfo({weather}: Props) {
    return (
        <div className="grid grid-cols-2 mb-12">
            <div>
                <h1 className="text-2xl">{weather.city}</h1>
                <div>{weather.description}</div>
                <div>Humidity: <span className="text-primary">{weather.humidity}</span>, Wind: <span className="text-primary">{weather.wind} km/h</span></div>
            </div>
            <div className="flex justify-end">
                <WeatherIcon size={56} icon={weather.icon}/>
            </div>
        </div>
    );
}

export default WeatherInfo;