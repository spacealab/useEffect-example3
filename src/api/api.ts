
const baseUrl = "https://api.openweathermap.org/data/2.5/";
const apikey = "3dce9b1c66837262a25b3f448d354a76";

interface WeatherProps {
    city: string,
}

interface ForecastProps {
    lon: number,
    lat: number,
}


export async function callWeatherApi({city} : WeatherProps) :Promise<WeatherResponse> {
    const response = await fetch( baseUrl + `weather?q=${city}&appid=${apikey}&units=metric`)
    return await response.json();
}


export async function callForecastApi({lat, lon}:ForecastProps) :Promise<ForecastResponse> {
    const response = await fetch( baseUrl + `onecall?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`)
    return await response.json();
}