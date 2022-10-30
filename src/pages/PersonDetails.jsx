import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

const PersonDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  // const { state: person } = useLocation();
  // console.log(person);

  const [person, setPerson] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          setError(true);
          setLoading(false);
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setPerson(data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(person);

  if (error) {
    return <NotFound />;
  }
  if (loading) {
    return (
      <div className="text-center">
        <h3>Data Loading</h3>
      </div>
    );
  }
  if (!error && !loading) {
    return (
      <div className="container text-center">
        <h3>
          {person?.first_name} {person?.last_name}
        </h3>
        <img className="rounded-circle" src={person?.avatar} alt="" />
        <p>{person?.email}</p>
        <div>
          <button
            onClick={() => navigate("/")}
            className="btn btn-success me-2"
          >
            Go Home
          </button>
          <button onClick={() => navigate(-1)} className="btn btn-warning">
            Go Back
          </button>
        </div>
      </div>
    );
  }
};

export default PersonDetails;
