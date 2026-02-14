import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>

                <div className="modal-header">
                    <h2 className="modal-title">{project.title}</h2>
                </div>

                <div className="modal-body">
                    <div className="modal-image-placeholder">
                        {project.gif || project.image ? (
                            <img
                                src={project.gif || project.image}
                                alt={`${project.title} Preview`}
                                style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '8px', backgroundColor: '#1e293b' }}
                            />
                        ) : (
                            <span>Preview do Projeto</span>
                        )}
                    </div>

                    <div className="modal-info">
                        <h3>Sobre o Projeto</h3>
                        <p className="modal-description">{project.fullDescription || project.description}</p>

                        <h3>Ferramentas Utilizadas</h3>
                        <div className="modal-tags">
                            {project.tags.map(tag => (
                                <span key={tag} className="modal-tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectModal;
