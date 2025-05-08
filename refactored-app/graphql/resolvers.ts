import { WeatherInterface } from "../mongoose/weather/interface";
import { findByZip, updateByZip } from "../mongoose/weather/services";

interface WeatherInterface {
  zip: string;
  weather: string;
  tempC: string;
  tempF: string;
  friends: string[];
}

export const resolvers = {
  Query: {
    weather: async (_: any, { zip }: { zip: string }) => {
      return await findByZip(zip);
    },
  },
  Mutation: {
    weather: async (_: any, { data }: { data: WeatherInterface }) => {
      await updateByZip(data.zip, data);
      return await findByZip(data.zip);
    },
  },
};