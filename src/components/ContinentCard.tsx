import { Card } from "react-bootstrap";
import { Continent } from "../common/interfaces/continent.interface";
import { Link } from "react-router-dom";

type IProps = {
  continent: Continent;
};

function ContinentCard({ continent }: IProps) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{continent.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {continent.code}
        </Card.Subtitle>
        <Card.Link as={Link} to={`/continents/${continent.code}`}>
          Voir les pays
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ContinentCard;
