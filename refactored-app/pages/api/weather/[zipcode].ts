import type { NextApiRequest, NextApiResponse } from "next";
import type { WeatherDetailType, WeatherQueryInterface } from "../../../custom";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<WeatherDetailType>
) {
  const { zipcode } = req.query as WeatherQueryInterface;
  // here we just return a fake weather object
  const result: WeatherDetailType = {
    zipcode,
    weather: "sunny",
    temp: 35,
  };
  res.status(200).json(result);
}