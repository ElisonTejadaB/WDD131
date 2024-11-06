// app.js

// Function to fetch weather data from OpenWeather API
async function getWeather(city) {
    const apiKey = 'f26e1de4-9c96-11ef-8770-0242ac130003-f26e1e48-9c96-11ef-8770-0242ac130003'; // Replace with your actual OpenWeather API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const weatherData = await response.json();
      displayWeather(weatherData);
    } catch (error) {
      displayError(error.message);
    }
  }
  
  // Function to display weather data on the page
  function displayWeather(data) {
    const weatherInfoDiv = document.getElementById('weatherInfo');
    weatherInfoDiv.innerHTML = `
      <h2>Weather in ${data.name}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Weather: ${data.weather[0].description}</p>
    `;
  }
  
  // Function to display error message
  function displayError(message) {
    const weatherInfoDiv = document.getElementById('weatherInfo');
    weatherInfoDiv.innerHTML = `<p>Error: ${message}</p>`;
  }
  
  // Event listener for the form submission
  document.getElementById('weatherForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    const city = document.getElementById('city').value;
    getWeather(city);
  });
  