import {callForecastApi, callWeatherApi} from "@/api/api"
import { useEffect, useState } from "react";

import ForecastList from "./ForecastList";
import {ForecastResponse} from "@/types/api/ForecastResponse"
import Image from "next/image";
import SearchForm from "./SearchForm";
import WeatherInfo from "./WeatherInfo";

interface Props {
    city: string
}

function Weather({city}: Props) {
    const [cityState, setCityState] = useState(city);

    const [weatherState, setWeatherState] = useState<weather>({
        city: "",
        wind: 0,
        humidity: 0,
        description: "",
        icon: "",
        daily: []
    });

    const [forecastState, setForecastState] = useState<ForecastResponse | null>(null);

    const getWeatherData = async () => {
        const response = await callWeatherApi({city: cityState});

        const weather = {
            city: response.name,
            wind:response.wind.speed,
            humidity: response.main.humidity,
            description: response.weather[0].description,
            icon: response.weather[0].icon,
            daily: []
        }
        setWeatherState(weather);

        const forecastResponse =  await callForecastApi({lat: response.coord.lat, lon: response.coord.lon})
        setForecastState(forecastResponse);
    }

    // if(weatherState.city.length === 0) {
    //     getWeatherData(city);
    // }

    useEffect(() => {
        getWeatherData();
    }, [cityState])

    return (
        <div className="flex flex-col items-center mt-[200px]">
            <Image src={"next.svg"} alt={"logo"} width={86} height={44}/>
            <div className="bg-white shadow mt-4 rounded-2xl p-8 py-16">
                <SearchForm city={cityState} setCityState={setCityState} />
                {weatherState.city && <WeatherInfo weather={weatherState}/>}
                {forecastState && <ForecastList forecast={forecastState}/>}
            </div>
        </div>
    );
}

export default Weather;