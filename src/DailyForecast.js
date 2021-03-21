import React from "react";
import { Col, Row } from "react-bootstrap";

export default function DailyForecast() {
  return (
    <Row md={5}>
      <Col>
        <Row className="row-future-day justify-content-center">Thu</Row>
        <Row className="row-future-date justify-content-center">11/03</Row>
        <Row className="row-future-icon justify-content-center">⛅</Row>
        <Row className="row-future-weather justify-content-center">
          <span className="number forecast">32</span>
          <span className="no-celcius">°</span>
        </Row>
      </Col>
      <Col>
        <Row className="row-future-day justify-content-center">Fri</Row>
        <Row className="row-future-date justify-content-center">12/03</Row>
        <Row className="row-future-icon justify-content-center">⛅</Row>
        <Row className="row-future-weather justify-content-center">
          <span className="number forecast">32</span>
          <span className="no-celcius">°</span>
        </Row>
      </Col>
      <Col>
        <Row className="row-future-day justify-content-center">Sat</Row>
        <Row className="row-future-date justify-content-center">13/03</Row>
        <Row className="row-future-icon justify-content-center">⛅</Row>
        <Row className="row-future-weather justify-content-center">
          <span className="number forecast">32</span>
          <span className="no-celcius">°</span>
        </Row>
      </Col>
      <Col>
        <Row className="row-future-day justify-content-center">Sun</Row>
        <Row className="row-future-date justify-content-center">14/03</Row>
        <Row className="row-future-icon justify-content-center">⛅</Row>
        <Row className="row-future-weather justify-content-center">
          <span className="number forecast">32</span>
          <span className="no-celcius">°</span>
        </Row>
      </Col>
      <Col>
        <Row className="row-future-day justify-content-center">Mon</Row>
        <Row className="row-future-date justify-content-center">15/03</Row>
        <Row className="row-future-icon justify-content-center">⛅</Row>
        <Row className="row-future-weather justify-content-center">
          <span className="number forecast">32</span>
          <span className="no-celcius">°</span>
        </Row>
      </Col>
    </Row>
  );
}
