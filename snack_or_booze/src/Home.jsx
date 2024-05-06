import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function Home({ numSnacks, numDrinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>

          {/* Add number of each type of item to home page */}
          <CardText>
            <span style={{ fontSize: "large", fontWeight: "bold" }}>
              Currently Serving{" "}
              <span style={{ color: "#a0beec" }}>{numSnacks}</span> Food Choices
              And <span style={{ color: "#a0beec" }}>{numDrinks}</span> Drink
              Choices!
            </span>
          </CardText>
          {/* ************************************************ */}
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
