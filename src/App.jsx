import Header from './components/Header'
import CourseCard from './components/CourseCard'
import Footer from './components/Footer'
import { coursesData } from './data/courses'

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <section className="intro-section">
          <h2>📚 Bem-vindo ao Curso!</h2>
          <p>
            Este é um mini curso completo e gratuito de <strong>Introdução à Programação em Python</strong>.
            Aqui você encontrará todo o material necessário para começar sua jornada no mundo da programação.
          </p>
          <p>
            Cada aula contém: <strong>vídeos explicativos</strong>, <strong>exercícios práticos</strong>, 
            <strong>textos e artigos</strong>, além de <strong>notebooks para praticar</strong>.
          </p>
        </section>

        <div className="courses-grid">
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <section className="intro-section">
          <h2>🔗 Recursos Adicionais</h2>
          <ul className="links-list">
            <li><a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">Documentação Oficial Python</a></li>
            <li><a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">Python.org</a></li>
            <li><a href="https://stackoverflow.com/questions/tagged/python" target="_blank" rel="noopener noreferrer">Stack Overflow - Python</a></li>
            <li><a href="https://www.youtube.com/results?search_query=python+tutorial" target="_blank" rel="noopener noreferrer">YouTube - Tutoriais Python</a></li>
          </ul>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default App
