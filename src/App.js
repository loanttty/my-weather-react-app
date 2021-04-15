import './App.css';
import "./Style.css";
import {useState} from 'react';
import { Card, Container} from "react-bootstrap";
import Search from "./SearchFunction";

export default function App() {
  let [background, setBackground] = useState("background-night")
  
  function changeBackground (time) {
    const {dt, sunrise, sunset} = time;
    if (dt >= sunrise && dt <= sunset) {
      setBackground("background-day")
    } else {
      setBackground("background-night")
    }
  }
  return (
    <div className="App">
      <Container className="px-4">
        <Card
          className={background}
          style={{}}
        >
          <Card.Body>
            <Search defaultCity="London" onChangeBackground={changeBackground} />
          </Card.Body>
        </Card>
        <p>Open-sourced on <a href="https://github.com/loanttty/my-weather-react-app">GitHub</a> by Tran Thanh Loan</p>
      </Container>
    </div>
  );
}
