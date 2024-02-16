import type {Daily, ForecastResponse} from "@/types/api/ForecastResponse";

import ForecastItem from "./ForecastItem";

interface Props {
    forecast: ForecastResponse
}

function ForecastList({forecast}: Props) {

    if (!forecast || !forecast.daily) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="grid grid-cols-8">
            {
                forecast.daily.map((item: Daily) => {
                    return <ForecastItem item={item}/>
                })
            }
        </div>
    );
}

export default ForecastList;