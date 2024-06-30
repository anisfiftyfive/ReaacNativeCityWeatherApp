export interface Weather {
    location: Location;
    current: CurrentWeather;
  }
  
  interface Location {
    name: string;
    region: string;
    country: string;
  }
  
  interface CurrentWeather {
    temp_c: number;
    wind_kph: number;
    precip_mm: number;
    humidity: number;
    condition: WeatherCondition;
  }
  
  interface WeatherCondition {
    text: string;
  }