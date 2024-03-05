import { Input } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export const WeatherPage: React.FC<any> = () => {
  const [city, setCity] = useState("");
  const apiKey = process.env.API_KEY;

  const getWeather = async (selectedCity: string) => {
    const url = `https://api.weatherbit.io/v2.0/current?city=${selectedCity}&key=92c7a8f788bd494fbee85f6d8126665e`;
    const res = await axios.get(url);
    return res.data;
  };

  const { isFetching, data } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => getWeather(city),
    enabled: Boolean(city),
  });

  return (
    <div className="w-full h-full p-4">
      <Input
        colorScheme="white"
        bg="white"
        size="md"
        width={"100%"}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Please enter the city"
      />
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Temperature: {data?.data[0]?.temp}</p>
        </div>
      )}
    </div>
  );
};
