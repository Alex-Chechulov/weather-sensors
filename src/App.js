import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";
import "./App.css";
// import Line from "./components/charts/line";
import { Button,Row,Col,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartLegend,
} from "@progress/kendo-react-charts";

import SensorData from './sensorData';
import React from "react";
// <div className="container">
//   <h1>Build React Graphs The Easy Way</h1>
//   <div className="section">
//     <Line />
//   </div>
// </div>

const series = [
  {
    data: [19, 9, 20,15,20,33],
  },

];

class App extends React.Component {
      constructor(){
          super();

          this.state = {
              children: [],
              sensors: ["Температура воздуха",
                        "Влажность воздуха",
                        "Атмосферное давление",
                        "Колличество осадков",
                        "Скорость ветра",
                        "Направление ветра",
                        "ФАР",
                        "Температура почвы",
                        "Влажность почвы",
                        "Влажность листьев",
                        "Кислотность почвы"],
              lastSelectedSensor:"",

};
          this.handleClick = this.handleClick.bind(this);
      }

      handleClick(e) {
  this.setState({
    children: [
        this.state.children,
        <div className="sensor">
          <div>{e.target.dataset.sensor}</div>
          <div>{SensorData(e.target.dataset.sensor).magnitude}
          {SensorData(e.target.dataset.sensor).value}</div>
          <button className="close">X</button>
        </div>
    ],
    lastSelectedSensor:e.target.dataset.sensor
  });
}
  render(){
  return (
<div className="App">
  <Container fluid="md">
    <Row>
        <Col xs="2">
        <Row className="main-sign">Список доступных датчиков</Row>
        <Row className="left-sensors">
            {this.state.sensors.map(sensor =><button className="sensor-selection" data-sensor={sensor} onClick={this.handleClick}>{sensor}</button>)}
        </Row>
        </Col>
        <Col xs="10">
        <Row className="main-window">{this.state.children.map(child => child)}</Row>
        <Row className="choise-data-window">

        </Row>

        <Row className="main-window">
        <Chart pannable zoomable style={{ height: 452}}>
          <ChartTitle text="status - last 6 days" />
          <ChartLegend position="top" orientation="horizontal" />
          <ChartValueAxis>
            <ChartValueAxisItem title={{ text: "Job Positions" }} min={0} max={40} />
          </ChartValueAxis>
          <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={["10.03", "11.03", "12.03", "13.03", "14.03", "15.03"]} />
          </ChartCategoryAxis>
          <ChartSeries>
            {series.map((item, idx) => (
              <ChartSeriesItem
                key={idx}
                type="line"
                tooltip={{ visible: true }}
                data={item.data}
                name={this.state.lastSelectedSensor}
              />
            ))}
          </ChartSeries>
        </Chart>
        </Row>
        </Col>
      </Row>
  </Container>
</div>
)};
}

export default App;

// class App extends React.Component{
//     constructor(){
//         super();
//
//         this.state = {
//             children: [],
//         }
//     }
//
//     appendChild(){
//         this.setState({
//             children: [
//                 this.state.children,
//                 <div>qwe </div>
//             ]
//         });
//     }
//
//     render(){
//
//         return(
//             <div>
//                 <a onClick={() => this.appendChild()}>Create Box</a>
//                 <div className="box-container">
//                     {this.state.children.map(child => child)}
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default App;
