import Header from './components/Header'
import CourseCard from './components/CourseCard'
import Footer from './components/Footer'
import { coursesData } from './data/courses'

const suggestedContent = {
  videos: [
    { title: 'Python para Iniciantes - Aula Completa', url: 'https://www.youtube.com' },
    { title: 'Python Básico - Introdução ao Código', url: 'https://www.youtube.com' },
    { title: 'Lógica de Programação em Python', url: 'https://www.youtube.com' }
  ],
  pdfs: [
    { title: 'Guia de Python no Drive', url: '#' },
    { title: 'Material de Referência em PDF', url: '#' },
    { title: 'Resumo de Conceitos Essenciais', url: '#' }
  ],
  exercises: [
    { title: 'OBI Exercícios', url: 'https://olimpiada.ic.unicamp.br/pratique/'},
    { title: 'Project Euler - Exercícios de Matemática', url: 'https://projecteuler.net/archives'},
    { title: 'Exercism - Python', url: 'https://exercism.org/tracks/python' },
    { title: 'HackerRank - Python', url: 'https://www.hackerrank.com/domains/python' },
    { title: 'Beecrowd - Problemas em Python', url: 'https://www.beecrowd.com.br/judge/pt/problems/all' }
  ]
}

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <section className="intro-section">
          <h2>📚 Conteúdo organizado por tópicos</h2>
          <p>
            Aqui você encontra o curso organizado por temas, não por aulas. Cada tópico reúne vídeos,
            PDFs no Drive e plataformas de exercícios para facilitar seu estudo.
          </p>
          <p>
            Use os cards abaixo para navegar pelos principais assuntos de Python e explore a sessão de
            conteúdos sugeridos para complementar seus estudos.
          </p>
        </section>

        {/* Cards das aulas/topicos */}
        <div className="courses-grid">
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <section className="suggested-section">
          <div className="section-head">
            <h2>✨ Conteúdos sugeridos</h2>
            <p>Links úteis para vídeos, PDFs no Drive e sites de exercícios selecionados.</p>
          </div>

          <div className="resource-grid">
            <div className="resource-card">
              <h3>Vídeos</h3>
              <ul className="links-list">
                {suggestedContent.videos.map((item, index) => (
                  <li key={index}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="resource-card">
              <h3>PDFs (Drive)</h3>
              <ul className="links-list">
                {suggestedContent.pdfs.map((item, index) => (
                  <li key={index}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="resource-card">
              <h3>Exercícios</h3>
              <ul className="links-list">
                {suggestedContent.exercises.map((item, index) => (
                  <li key={index}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default App
