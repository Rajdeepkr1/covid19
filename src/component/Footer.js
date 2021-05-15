import React from "react";
import { Button, Card } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Card bg="danger" variant="danger">
        <Card.Header>COVID-19</Card.Header>
        <Card.Body>
          <Card.Title>
            COVID-19 affects different people in different ways. Most infected
            people will develop mild to moderate illness and recover without
            hospitalization.
          </Card.Title>
          <Card.Text>Most common symptoms: fever dry cough tiredness</Card.Text>
          <Card.Text>
            Serious symptoms: difficulty breathing or shortness of breath chest
            pain or pressure loss of speech or movement
          </Card.Text>
          <Button variant="primary">COVID-19</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Footer;
