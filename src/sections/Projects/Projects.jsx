import styles from './ProjectStyles.module.css'
import Correction from '../../assets/Correction.png'
import ProjectCard from '../../common/ProjectCard'
import Pixels from '../../assets/Pixels.png';
import CodeNine from '../../assets/Codenine.png'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projetos</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={Correction} link={'https://github.com/Mercurine22/correction-repo'} h3="Corr-e-ction" paragrafo="Aplicativo de correção de redação"/>
            <ProjectCard src={Pixels} link={'https://github.com/Daiene/Pixels'} h3="Pixels" paragrafo="Site criado para apoiar a causa da insuficiencia renal crônica"/>
            <ProjectCard src={CodeNine} link={'https://github.com/Code-Nine-FTC/API-2024.1'} h3="PostHelp" paragrafo="Sistema de atendimento para correios"/>
        </div>
    </section>
  )
}

export default Projects