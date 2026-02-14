import React, { useState } from 'react';
import './Projects.css';
import ProjectModal from './ProjectModal';

const projectsData = [
    {
        id: 1,
        title: 'Nexus',
        description: 'Sistema interativo com acesso ao SIGAA com funcionalidades extras".',
        fullDescription: 'Desenvolvido com foco em ajudar os estudantes do CEFET-MG a se conectarem e acessarem o sistema academico de forma mais rapida e interativa.',
        tags: ['Flutter', 'Card', 'Banco de Dados'],
        image: '/projects/reputation.png',
        gif: '/projects/cefetapp.gif'
    }
];

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState(null);

    // Prevent body scroll when modal is open (re-using previous logic)
    React.useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [selectedProject]);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % projectsData.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
    };

    const handleCardClick = (index) => {
        if (activeIndex === index) {
            setSelectedProject(projectsData[index]);
        } else {
            setActiveIndex(index);
        }
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    const activeProject = projectsData[activeIndex];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Meus Projetos</h2>

                <div className="carousel-container">
                    <button className="nav-btn prev" onClick={handlePrev} aria-label="Anterior">
                        &#10094;
                    </button>

                    {projectsData.map((project, index) => {
                        // Calculate position relative to active index to determine style/order if needed
                        // For this simple 3D effect, just checking equality is enough for the main class
                        const isActive = index === activeIndex;

                        return (
                            <div
                                key={project.id}
                                className={`phone-card ${isActive ? 'active' : ''}`}
                                onClick={() => handleCardClick(index)}
                            >
                                <div className="phone-notch"></div>
                                <div className="phone-screen">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                    />
                                </div>

                                {/* Desktop Hover Overlay */}
                                <div className="phone-overlay">
                                    <h3 className="overlay-title">{project.title}</h3>
                                    <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{project.description}</p>
                                    <div className="overlay-tech">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="tech-tag">{tag}</span>
                                        ))}
                                    </div>
                                    <div style={{ marginTop: '1.5rem', fontWeight: '600', color: '#38bdf8' }}>
                                        Ver Demo &rarr;
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    <button className="nav-btn next" onClick={handleNext} aria-label="Próximo">
                        &#10095;
                    </button>
                </div>

                {/* Mobile Details Panel (Visible on all screens, but primary source of info on mobile) */}
                <div className="mobile-details">
                    <h3 className="detail-title">{activeProject.title}</h3>
                    <p className="detail-desc">{activeProject.fullDescription}</p>
                    <div className="project-tags" style={{ justifyContent: 'center' }}>
                        {activeProject.tags.map(tag => (
                            <span key={tag} className="project-tag">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>

            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={closeModal} />
            )}
        </section>
    );
};

export default Projects;
