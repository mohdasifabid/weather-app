import { Select } from "@chakra-ui/react";

export const WeatherPage: React.FC<any> = () => {
  return (
    <div className="w-full h-full p-4">
      <Select
        placeholder="Select option"
        colorScheme="white"
        bg="white"
        size="md"
        width={"100%"}
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </div>
  );
};
