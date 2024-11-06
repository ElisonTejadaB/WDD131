
// Function to fetch weather data
async function getWeather(city) {
    const apiKey = 'f26e1de4-9c96-11ef-8770-0242ac130003-f26e1e48-9c96-11ef-8770-0242ac130003'; // Replace with your real OpenWeather API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      displayWeather(data);
    } catch (error) {
      document.getElementById('weatherInfo').innerHTML = `<p>${error.message}</p>`;
    }
  }
  
  // Function to display weather data
  function displayWeather(data) {
    const weatherInfo = `
      <h2>Weather in ${data.name}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Weather: ${data.weather[0].description}</p>
    `;
    document.getElementById('weatherInfo').innerHTML = weatherInfo;
  }
  
  // Event listener for form submission
  document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page
    const city = document.getElementById('city').value;
    if (city) {
      getWeather(city);
    }
  });
  