import { useState } from 'react'

// State plan: Projects owns the active filter; the visible list is derived from it.
const projects = [
  {
    id: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with React and Node.js, featuring shopping cart, payment integration, and admin dashboard.',
    category: 'fullstack',
    categoryLabel: 'Full-Stack',
    image: 'https://via.placeholder.com/400x250/4f46e5/ffffff?text=E-Commerce+App',
    imageAlt: 'E-Commerce Platform',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    featured: true,
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    description: 'Clean and intuitive weather dashboard with location search, 7-day forecast, and beautiful animations.',
    category: 'frontend',
    categoryLabel: 'Frontend',
    image: 'https://via.placeholder.com/400x250/059669/ffffff?text=Weather+App',
    imageAlt: 'Weather Dashboard',
    tags: ['JavaScript', 'CSS3', 'API'],
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description: 'Productivity app with drag-and-drop functionality, project collaboration, and deadline tracking.',
    category: 'webapp',
    categoryLabel: 'Web App',
    image: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=Task+Manager',
    imageAlt: 'Task Management App',
    tags: ['React', 'TypeScript', 'Firebase'],
  },
  {
    id: 'creative-portfolio',
    title: 'Creative Portfolio',
    description: 'Responsive portfolio website for a graphic designer with interactive galleries and smooth animations.',
    category: 'design',
    categoryLabel: 'Design',
    image: 'https://via.placeholder.com/400x250/7c3aed/ffffff?text=Portfolio+Site',
    imageAlt: 'Portfolio Website',
    tags: ['HTML5', 'CSS3', 'GSAP'],
  },
]

const filters = [
  { value: 'all', label: 'All Projects' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'fullstack', label: 'Full-Stack' },
  { value: 'design', label: 'Design' },
  { value: 'webapp', label: 'Web App' },
]

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="filter-buttons">
          {filters.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              className={`filter-btn ${activeFilter === value ? 'active' : ''}`}
              aria-pressed={activeFilter === value}
              onClick={() => setActiveFilter(value)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-image">
                <img src={project.image} alt={project.imageAlt} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="#" className="project-link"><span>🔗</span> Live Demo</a>
                    <a href="#" className="project-link"><span>💻</span> Code</a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">{project.categoryLabel}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => <span key={tag} className="project-tag">{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
