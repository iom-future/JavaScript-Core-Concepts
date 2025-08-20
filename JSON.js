let weatherReport={
  time: "12:30:13 pm",
  weather: "cloudy",
  advice: "stay in door",
  location: {
  country: "Nigeria",
    state: "Port Harcourt"}
};
let jsonFormat= JSON.stringify(weatherReport)
console.log(jsonFormat);
console.log(JSON.parse(jsonFormat));