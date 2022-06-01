import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";
import "./App.css";
import Line from "./components/charts/line";
import { Button,Row,Col,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
// <div className="container">
//   <h1>Build React Graphs The Easy Way</h1>
//   <div className="section">
//     <Line />
//   </div>
// </div>
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
                        "Влежность почвы",
                        "Влажность листьев",
                        "Кислотность почвы"],
};
          this.handleClick = this.handleClick.bind(this);
      }

      handleClick(e) {
  this.setState({
    children: [
        this.state.children,
        <div>{e.target.dataset.sensor}</div>
    ]

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
            {this.state.sensors.map(sensor =><div className="sensors" key={sensor} data-sensor={sensor} onClick={this.handleClick}>{sensor}</div>)}
        </Row>
        </Col>
        <Col xs="10">
        <Row className="main-window">{this.state.children.map(child => child)}</Row>
        <Row className="choise-data-window"></Row>
        <Row className="main-window"></Row>
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
