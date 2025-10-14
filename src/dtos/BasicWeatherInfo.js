export default class WeatherDTO {
  constructor(apiResponse) {
    const icon = apiResponse.current?.condition?.icon || "";
    this.city = apiResponse.location?.name || "Unknown";
    this.tempC = apiResponse.current?.temp_c ?? 0;
    this.conditionText = apiResponse.current?.condition?.text || "";
    this.iconUrl = icon.startsWith("//") ? `https:${icon}` : icon;
    this.localtime = apiResponse.location?.localtime || "";
  }
}