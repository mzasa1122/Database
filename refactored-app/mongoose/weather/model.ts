// mongoose/weather/model.ts
import { Schema, model, models } from "mongoose";
import { WeatherInterface } from "./interface";

const WeatherSchema = new Schema<WeatherInterface>({
  zip: { type: String, required: true, unique: true },
  weather: String,
  tempC: String,
  tempF: String,
  friends: [String],
});

export default models.Weather || model("Weather", WeatherSchema);