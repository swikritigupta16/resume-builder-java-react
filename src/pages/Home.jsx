import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h1>Resume Builder</h1>
      <button
        className="btn btn-primary mt-3"
        onClick={() => navigate("/builder")}
      >
        Create Resume
      </button>
    </div>
  );
}

export default Home;
