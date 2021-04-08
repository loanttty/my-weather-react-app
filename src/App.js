import './App.css';
import "./Style.css";
import { Card, Container} from "react-bootstrap";
import Chart from "./ChartHourlyForecast";
import DailyForecast from "./DailyForecast";
import Search from "./SearchFunction";

export default function App() {
  return (
    <div className="App">
      <Container className="px-4">
        <Card
          className="background-night"
          style={{}}
        >
          <Card.Body>
            <Search defaultCity="London" />
            <Chart />
            <DailyForecast />
          </Card.Body>
        </Card>
        <p>Open-sourced on <a href="https://github.com/loanttty/my-weather-react-app">GitHub</a> by Tran Thanh Loan</p>
      </Container>
    </div>
  );
}
