interface WeatherProps {
  weather: string;
}

type WeatherDetailType = {
  zipcode: string;
  weather: string;
  temp: number;
};

type ResponseItemType = {
  id: string;
  name: string;
};

interface WeatherQueryInterface {
  zipcode: string;
}