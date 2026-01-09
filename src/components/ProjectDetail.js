import { useLocation, useNavigate, useParams } from 'react-router-dom';

function ProjectDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const { title, description } = location.state || {};

  return (
    <section className="section">
      <button onClick={() => navigate(-1)}>Wróć</button>
      <h2>{title || `Projekt ${id}`}</h2>
      <p>{description || 'Brak opisu projektu.'}</p>
    </section>
  );
}

export default ProjectDetail;
