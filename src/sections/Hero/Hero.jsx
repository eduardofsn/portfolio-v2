import styles from './HeroStyles.module.css'
import heroImg from '../../assets/heroImg.png'
import Linkedin from '../../assets/linkedin-light.svg'
import Github from '../../assets/github-light.svg'
import Youtube from '../../assets/youtube-light.svg'
import CV from '../../assets/CV.pdf'

function Hero() {
  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="home image"/>
        </div>
        <div className={styles.info}>
            <h1>Eduardo <br/> Namiuti</h1>
            <h2>Frontend Developer</h2>
            <span>
                <a href="https://www.linkedin.com/in/eduardo-namiuti-5641b627b/" target='_blank'>
                    <img src={Linkedin} alt="Linkedin icon"/>
                </a>
                <a href="https://github.com/eduardofsn" target='_blank'>
                    <img src={Github} alt="Github icon"/>
                </a>
                <a href="https://www.youtube.com/@thecriticsoficial" target='_blank'>
                    <img src={Youtube} alt="Youtube icon"/>
                </a>
            </span>
            <p className={styles.description}>Sou um desenvolvedor web com paixão pela programação.</p>
            <a href={CV} download>
                <button className='hover'>Currículo</button>
            </a>
        </div>
    </section>
)
}

export default Hero