# Weather App using Next.js and Weatherbit API

This Weather App is built using Create Next App, incorporating Chakra UI for styling, lodash for debouncing, and React Query to handle API calls. The app fetches current weather data from the Weatherbit API to provide users with up-to-date weather information.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mohdasifabid/weather-app.git
   cd weather-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up API Key:**

   - Get your API key by signing up at [Weatherbit](https://www.weatherbit.io/api).
   - Create a `.env.local` file in the root of your project.
   - Add the following line to the file:

     ```env
     REACT_APP_WEATHERBIT_API_KEY=your-api-key-here
     ```

4. **Run the application:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Features

- **Current Weather Display:**
  The app fetches and displays the current weather details, including temperature, description, and location.

- **Search Functionality:**
  Users can search for the current weather in different locations.

- **Debouncing:**
  Debouncing is implemented using lodash to improve the search input performance and reduce unnecessary API calls.

- **Styling with Chakra UI:**
  The application uses Chakra UI components for a clean and responsive design.

- **React Query for API Calls:**
  React Query is utilized to manage API calls and state management efficiently.

## Dependencies

- [Create Next App](https://create-next-app.js.org/)
- [Chakra UI](https://chakra-ui.com/)
- [Lodash](https://lodash.com/)
- [React Query](https://react-query.tanstack.com/)
- [Weatherbit API](https://www.weatherbit.io/api)

## Contributing

Feel free to contribute to the project by submitting issues or pull requests.

## License

This Weather App is open source and available under the [MIT License](LICENSE).