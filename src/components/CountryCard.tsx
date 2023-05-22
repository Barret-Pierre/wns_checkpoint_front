import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Country } from "../common/interfaces/country.interface";

type IProps = {
  country: Country;
};

function CountryCard({ country }: IProps) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{country.emoji}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {country.name}
        </Card.Subtitle>
        <Card.Link as={Link} to={country.code}>
          Voir le pays
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CountryCard;
