import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ProjectDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('/projects.json')
      .then((res) => {
        if (!res.ok) throw new Error('Fetch error');
        return res.json();
      })
      .then((data) => {
        const p = data.find((item) => String(item.id) === String(id));
        setProject(p || null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <section className="section">
        <p>Ładowanie...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section">
        <p>Błąd: {error}</p>
      </section>
    );
  }

  if (!project) {
    return (
      <section className="section">
        <button onClick={() => navigate(-1)}>Wróć</button>
        <h2>Projekt {id}</h2>
        <p>Brak opisu projektu.</p>
      </section>
    );
  }

  return (
    <section className="section">
      <button onClick={() => navigate(-1)}>Wróć</button>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </section>
  );
}

export default ProjectDetail;
