import React from "react";
import { Link } from "react-router-dom";
import "./ItemMenu.css";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function ErrorPage({ cardTitle, cardText }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {cardTitle}
          </CardTitle>
          <CardText>{cardText}</CardText>
          <Link className="link" to={"/"}>
            Return Home
          </Link>
        </CardBody>
      </Card>
    </section>
  );
}

export default ErrorPage;
