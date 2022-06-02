

function SensorData (sensor){

let temperatureOfAir = {
  magnitude:"t°:",
  value:"18°C"
}
let humidityOfAir = {
  magnitude:"φ:",
  value:"93%"
}
let atmospherePressure = {
  magnitude:"P:",
  value:"600гПа"
}
let amountOfPrecipitation = {
  magnitude:"Q:",
  value:"10мм/час"
}
let speedOfWind = {
  magnitude:"V:",
  value:"55м/с"
}
let directionOfWind = {
  magnitude:"α:",
  value:"15°"
}
let photosyntheticActiveRadiation = {
  magnitude:"η_:",
  value:"500Вт/м2"
}
let soilTemperature = {
  magnitude:"t°:",
  value:"10°C"
}
let soilMoisture = {
  magnitude:"φ:",
  value:"0,35%"
}
let leafMoisture = {
  magnitude:"φ:",
  value:"50%"
}
let soilAcidity = {
  magnitude:"Hr:",
  value:"7pH"
}
let def = {
  magnitude:"",
  value:""
}
switch (sensor) {
  case "Температура воздуха":
    return temperatureOfAir;
    break;
  case "Влажность воздуха":
    return humidityOfAir;
    break;
  case "Атмосферное давление":
    return atmospherePressure;
    break;
  case "Колличество осадков":
    return amountOfPrecipitation;
    break;
    case "Скорость ветра":
      return speedOfWind;
      break;
  case "Направление ветра":
    return directionOfWind;
    break;
  case "ФАР":
    return photosyntheticActiveRadiation;
    break;
  case "Температура почвы":
    return soilTemperature;
    break;
  case "Влажность почвы":
    return soilMoisture;
    break;
  case "Влажность листьев":
    return leafMoisture;
    break;
  case "Кислотность почвы":
    return soilAcidity;
    break;
  default:
    return def;
}
}
export default SensorData;
