import React from "react";
import { Form, Dropdown, Col, Row } from "react-bootstrap";

export default function Search() {
  return (
    <div className="search">
      <Row className="row-search">
        <Col xs={8}>
          <Form>
            <Form.Control
              id="enter-city"
              type="text"
              placeholder="Enter City"
            />
            <button type="submit" className="btn search-button">
              <i class="fas fa-search-location" />
            </button>
          </Form>
        </Col>
        <Col xs={2}>
          <button className=" btn search-current">
            <i class="fas fa-map-marker-alt" />
          </button>
        </Col>
        <Col xs={2}>
          <Dropdown>
            <Dropdown.Toggle id="dropdown">
              <i class="fas fa-heart" id="heart1" />
            </Dropdown.Toggle>
            <Dropdown.Menu id="dropdown-menu">
              <Dropdown.Item id="dropdown-item" className="Kosice">
                Kosice
              </Dropdown.Item>
              <Dropdown.Item id="dropdown-item" className="San-Jose">
                San Jose
              </Dropdown.Item>
              <Dropdown.Item id="dropdown-item" className="Paris">
                Paris
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </div>
  );
}
