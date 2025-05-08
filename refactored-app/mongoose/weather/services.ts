// mongoose/weather/services.ts
import WeatherModel from "./model";
import { WeatherInterface } from "./interface";

export async function findByZip(zip: string) {
  return WeatherModel.findOne({ zip }).lean();
}

export async function updateByZip(
  zip: string,
  data: WeatherInterface
) {
  return WeatherModel.findOneAndUpdate({ zip }, data, { new: true });
}