import './App.css';
import "./Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row } from "react-bootstrap";
import Chart from "./ChartHourlyForecast";
import DailyForecast from "./DailyForecast";
import Search from "./SearchFunction";

export default function App() {
  return (
    <div className="App">
      <Container className="px-4">
        <Card
          className="background-night"
          style={{ width: "30rem", marginTop: "20px" }}
        >
          <Card.Body>
            <Search />
            <Row className="row-place justify-content-center">
              <span className="city">London</span>
              <span style={{ width: "fit-content" }}>
                <i class="far fa-heart" id="heart2" />
              </span>
            </Row>
            <Row className="row-date justify-content-center">
              Wed, Mar 10 2021 10:48
            </Row>
            <Row className="row-info justify-content-center">
              Real Feel
              <span
                className="number real-feel"
                style={{ width: "fit-content", paddingLeft: "5px" }}
              >
                31
              </span>
              <span
                className="celcius"
                style={{ width: "fit-content", paddingRight: "5px" }}
              >
                °C
              </span>{" "}
              | WindSpeed:
              <span
                className="wind-speed"
                style={{ width: "fit-content", paddingLeft: "5px" }}
              >
                3
              </span>
              km/h
            </Row>
            <Row className="row-info justify-content-center">
              Humidity:
              <span className="humidity" style={{ width: "fit-content" }}>
                10
              </span>
              %
            </Row>
            <Row className="big justify-content-center">
              <span
                className="icon-big"
                style={{ width: "fit-content", padding: 0 }}
              >
                ⛅
              </span>
              <span className="number-big" style={{ width: "fit-content" }}>
                32
              </span>
              <span className="celcius-big" style={{ width: "fit-content" }}>
                °C
              </span>
              <span className="divider" style={{ width: "fit-content" }}>
                |
              </span>
              <button
                className="farenheit-conversion"
                style={{ width: "fit-content" }}
              >
                °F
              </button>
            </Row>
            <Row className="row-desc justify-content-center">Clear</Row>
            <Row className="row-max-min justify-content-center">
              <span
                className="number current-max"
                style={{ width: "fit-content" }}
              >
                35
              </span>
              <span className="celcius" style={{ width: "fit-content" }}>
                °C
              </span>
              /
              <span
                className="number current-min"
                style={{ width: "fit-content" }}
              >
                27
              </span>
              <span className="celcius" style={{ width: "fit-content" }}>
                °C
              </span>
            </Row>
            <Chart />
            <DailyForecast />
          </Card.Body>
        </Card>
        <p>Open-sourced on <a>GitHub</a> by Tran Thanh Loan</p>
      </Container>
    </div>
  );
}
