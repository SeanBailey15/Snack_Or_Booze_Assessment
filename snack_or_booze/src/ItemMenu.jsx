import { Link } from "react-router-dom";
import "./ItemMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

function ItemMenu({ path, items, cardTitle, cardText }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {cardTitle}
          </CardTitle>
          <CardText>{cardText}</CardText>
          <ListGroup>
            {items.map((item) => (
              <Link to={`${path}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default ItemMenu;
