import { useNavigate } from 'react-router-dom';

function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: 'Testy manualne aplikacji- Projekt własny portfolio',
      description:
        'Testy manualne aplikacji webowej. Tworzenie przypadków testowych, zgłaszanie błędów, testy regresji.',
    },
    {
      id: 2,
      title: 'Testy funkcjonalne strony internetowej- projekt własny',
      description:
        'Tworzenie przypadków testowych, zgłaszanie błędów, testy regresji.',
    },
  ];

  return (
    <section className="section">
      <h2>Projekty testerskie</h2>

      {projects.map((p) => (
        <div className="project" key={p.id}>
          <h3>
            <button
              type="button"
              onClick={() => navigate(`/project/${p.id}`)}
            >
              {p.title}
            </button>
          </h3>
        </div>
      ))}
    </section>
  );
}

export default Projects;
