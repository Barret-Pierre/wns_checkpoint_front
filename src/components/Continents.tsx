import { useQuery } from "@apollo/client";
import { GET_CONTINENTS } from "../graphql/useGetContinents";
import { Continent } from "../common/interfaces/continent.interface";
import { Link } from "react-router-dom";

function Continents() {
  const { data } = useQuery<{ continents: Continent[] }>(GET_CONTINENTS);
  return (
    <div>
      <h2>Continents</h2>
      {data?.continents.map((continent) => (
        <>
          <Link to={continent.code}>{continent.name}</Link>
        </>
      ))}
    </div>
  );
}

export default Continents;
