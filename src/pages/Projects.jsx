import { Link } from 'react-router-dom';
import './Projects.css';

const projectData = [
  {
    id: 1,
    title: 'Product Recommendation Engine',
    category: 'Machine learning · Personalization',
    shortDesc: 'A recommendation system that uses product interactions to suggest relevant items.',
    technologies: ['React', 'Python', 'Scikit-learn'],
    image: '/images/blog-platform.jpg',
    href: '/projects/project1',
  },
  {
    id: 2,
    title: 'Customer Segmentation System',
    category: 'Data science · Customer analytics',
    shortDesc: 'A clustering workflow that groups customers by purchasing behavior for targeted analysis.',
    technologies: ['Python', 'Pandas', 'KMeans', 'Matplotlib'],
    href: '/projects/project2',
  },
];

const Projects = () => (
  <main className="projects-page">
    <section className="projects-intro" aria-labelledby="projects-title">
      <div className="projects-intro__eyebrow">
        <span>Selected work</span>
        <span className="projects-intro__rule" aria-hidden="true" />
        <span>01 — 02</span>
      </div>

      <div className="projects-intro__heading">
        <h1 id="projects-title">Projects<span>.</span></h1>
        <p>A selection of experiments and tools exploring thoughtful interfaces, useful data, and machine learning.</p>
      </div>

      <p className="projects-intro__count">{String(projectData.length).padStart(2, '0')} projects</p>
    </section>

    <section className="projects-grid" aria-label="Selected projects">
      {projectData.map((project) => (
        <article className="project-card" key={project.id}>
          <Link className="project-card__link" to={project.href} aria-label={`View ${project.title}`}>
            <div className={`project-card__visual project-card__visual--${project.id}`}>
              {project.image ? (
                <img src={project.image} alt="Abstract product interface illustration" />
              ) : (
                <div className="segment-preview" aria-hidden="true">
                  <div className="segment-preview__topline"><span>Customer groups</span><span>Segmentation</span></div>
                  <div className="segment-preview__chart">
                    <span style={{ '--bar-height': '44%' }} />
                    <span style={{ '--bar-height': '72%' }} />
                    <span style={{ '--bar-height': '56%' }} />
                    <span style={{ '--bar-height': '88%' }} />
                    <span style={{ '--bar-height': '63%' }} />
                    <span style={{ '--bar-height': '100%' }} />
                    <span style={{ '--bar-height': '77%' }} />
                  </div>
                  <div className="segment-preview__legend"><i /><span>Purchase frequency</span></div>
                </div>
              )}
              <span className="project-card__number">0{project.id}</span>
              <span className="project-card__arrow" aria-hidden="true">↗</span>
            </div>

            <div className="project-card__body">
              <div className="project-card__meta">
                <span>{project.category}</span>
              </div>
              <h2>{project.title}</h2>
              <p>{project.shortDesc}</p>
              <div className="project-card__footer">
                <ul className="project-card__stack" aria-label="Technologies">
                  {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
                <span className="project-card__view">View project <span aria-hidden="true">→</span></span>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </section>
  </main>
);

export default Projects;