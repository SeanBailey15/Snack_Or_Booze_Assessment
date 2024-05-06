import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function Item({ items, cantFind }) {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let item = items.find((item) => item.id === id);
    if (!item) {
      navigate(cantFind); // Navigate to the 404 page
    }
  }, [items, id, cantFind, navigate]);

  let item = items.find((item) => item.id === id);
  if (!item) {
    return null; // Return null if item is not found, to prevent rendering the rest of the component
  }

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          <p>
            <b>Recipe:</b> {item.recipe}
          </p>
          <p>
            <b>Serve:</b> {item.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Item;
