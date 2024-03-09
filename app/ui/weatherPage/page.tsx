import { Box, Heading, Input, Stack, Text } from "@chakra-ui/react";
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
  console.log(data?.data[0]);
  const weatherInfo = data?.data[0];
  const dateString = weatherInfo?.ob_time;
  const dateObject = new Date(dateString);
  console.log(dateObject);
  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
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
        <Box paddingTop={"2rem"} display="flex" width="100%">
          <Box width={"100%"} display="flex" flexDir={"column"} gap={"2rem"}>
            <Box>
              <Heading textAlign="center" size={"md"}>
                CURRENT WEATHER
              </Heading>
              <Box
                display={"flex"}
                flexDir="row"
                justifyContent={"space-around"}
              >
                <Box textAlign="center">
                  <Text size="3xl">
                    {`${weatherInfo?.city_name}, ${weatherInfo?.country_code}`}
                  </Text>
                  <Text>{`Today ${day} ${monthNames[month - 1]}`}</Text>
                </Box>
                <Box textAlign="center">
                  <Text size="3xl">{`${weatherInfo?.app_temp} °C`}</Text>
                  <Text>{weatherInfo?.weather?.description}</Text>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box>
              <Heading textAlign="center" size={"md"}>
                AIR CONDITIONS
              </Heading>
              <Box
                display={"flex"}
                flexDir="row"
                justifyContent={"space-around"}
              >
                <Box textAlign="center">
                  <Text size="3xl">Real Feel</Text>
                  <Text>{`${weatherInfo?.temp} °C`}</Text>
                </Box>
                <Box textAlign="center">
                  <Text size="3xl">Wind Speed</Text>
                  <Text>{`${weatherInfo?.wind_spd?.toFixed(1)} m/s`}</Text>
                </Box>
                <Box textAlign="center">
                  <Text size="3xl">Clouds</Text>
                  <Text>{`${weatherInfo?.clouds}%`}</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </div>
  );
};
