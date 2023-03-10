export default class City {
  constructor(data) {
    const {
      name: cityName,
      main: { temp = '', feels_like: feelsLike = '', humidity = ''} = {},
      weather: [{ description = '', icon = '' } = {}] = [],
      wind: { speed: windSpeed = '' } = {},
    } = data;
    this.cityName = cityName;
    this.id = Date.now();
    this.temp = temp;
    this.feelsLike = feelsLike;
    this.humidity = humidity;
    this.description = description;
    this.icon = icon;
    this.windSpeed = windSpeed;
  }
}
