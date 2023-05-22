import { useQuery } from "@apollo/client";
import { ContinentWithWountry } from "../common/interfaces/continent.interface";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { GET_CONTINENT_WITH_COUNTRY } from "../graphql/useGetContinents copy";
import CountryCard from "./CountryCard";

function Countries() {
  const location = useLocation();

  const { loading, data } = useQuery<{ continent: ContinentWithWountry }>(
    GET_CONTINENT_WITH_COUNTRY,
    {
      variables: {
        code: location.pathname.split("/")[2],
      },
    }
  );

  return (
    <Container className="pt-5">
      <h2 className="mb-4">Continent name </h2>
      {loading && <p>Loading...</p>}
      <Row xs={1} md={3} className="g-4">
        {data?.continent.countries.map((country) => (
          <Col>
            <CountryCard country={country} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Countries;
