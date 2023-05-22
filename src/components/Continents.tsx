import { useQuery } from "@apollo/client";
import { GET_CONTINENTS } from "../graphql/useGetContinents";
import { Continent } from "../common/interfaces/continent.interface";
import { Col, Container, Row } from "react-bootstrap";
import ContinentCard from "./ContinentCard";

function Continents() {
  const { loading, data } = useQuery<{ continents: Continent[] }>(
    GET_CONTINENTS
  );
  return (
    <Container className="pt-5">
      <h2 className="mb-4">Continents</h2>
      {loading && <p>Loading...</p>}
      <Row xs={1} md={3} className="g-4">
        {data?.continents.map((continent) => (
          <Col>
            <ContinentCard continent={continent} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Continents;
