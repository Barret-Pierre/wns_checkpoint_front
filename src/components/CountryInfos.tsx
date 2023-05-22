import { useQuery } from "@apollo/client";
import { Card, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { GET_CONTRY_INFOS } from "../graphql/useGetContinents copy 2";
import { CountryWithAllInfos } from "../common/interfaces/country.interface";

function CountryInfos() {
  const location = useLocation();

  const { loading, data } = useQuery<{ country: CountryWithAllInfos }>(
    GET_CONTRY_INFOS,
    {
      variables: {
        code: location.pathname.split("/")[4],
      },
    }
  );

  return (
    <Container className="pt-5">
      {loading && <p>Loading...</p>}
      {data && (
        <Card>
          <Card.Header>
            <h2 className="m-0">
              {data.country.name} {data.country.emoji}
            </h2>
          </Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              <b>Capitale:</b> {data.country.capital}
            </Card.Text>
            <Card.Text>
              <b>Monaie utilisée:</b> {data.country.currency}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}

export default CountryInfos;
