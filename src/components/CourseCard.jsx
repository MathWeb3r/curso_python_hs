function CourseCard({ course }) {
  const getStatusClass = (status) => {
    const statusMap = {
      'completed': 'status-completed',
      'ongoing': 'status-ongoing',
      'planned': 'status-planned'
    }
    return statusMap[status] || ''
  }

  const getStatusLabel = (status) => {
    const labels = {
      'completed': 'Completo',
      'ongoing': 'Em Desenvolvimento',
      'planned': 'Planejado'
    }
    return labels[status] || status
  }

  return (
    <div className="course-card">
      <div className="course-header">
        <h3>{course.title}</h3>
        <p className="course-number">{course.subtitle}</p>
      </div>
      <div className="course-content">
        {/* Videos */}
        <div className="content-section">
          <div className="content-title">
            <span className="icon">🎥</span> Vídeos
          </div>
          <ul className="links-list">
            {course.videos.map((video, index) => (
              <li key={index}>
                <a href={video.url || '#'} target="_blank" rel="noopener noreferrer">
                  {video.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Exercises */}
        <div className="content-section">
          <div className="content-title">
            <span className="icon">📝</span> Exercícios
          </div>
          <ul className="links-list">
            {course.exercises.map((exercise, index) => (
              <li key={index}>
                <a href={exercise.url || '#'} target="_blank" rel="noopener noreferrer">
                  {exercise.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Texts & PDFs */}
        <div className="content-section">
          <div className="content-title">
            <span className="icon">📖</span> Textos & PDFs
          </div>
          <ul className="links-list">
            {course.texts.map((text, index) => (
              <li key={index}>
                <a href={text.url || '#'} target="_blank" rel="noopener noreferrer">
                  {text.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Notebook */}
        <div className="content-section">
          <div className="content-title">
            <span className="icon">💻</span> Notebook
          </div>
          <a href={course.notebookUrl || '#'} className="notebook-link" target="_blank" rel="noopener noreferrer">
            Abrir Notebook no Drive 📓
          </a>
        </div>

        <span className={`status-badge ${getStatusClass(course.status)}`}>
          {getStatusLabel(course.status)}
        </span>
      </div>
    </div>
  )
}

export default CourseCard
