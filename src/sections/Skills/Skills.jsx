import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-light.svg'
import SkillList from '../../common/SkillList'

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Habilidades</h1>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill='HTML'/>
          <SkillList src={checkMarkIcon} skill='CSS'/>
          <SkillList src={checkMarkIcon} skill='JavaScript'/>
          <SkillList src={checkMarkIcon} skill='TypeScript'/>
          <SkillList src={checkMarkIcon} skill='Node'/>
          <SkillList src={checkMarkIcon} skill='SASS'/>
        </div>
        <hr/>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill='C++'/>
          <SkillList src={checkMarkIcon} skill='PHP'/>
          <SkillList src={checkMarkIcon} skill='Tailwind CSS'/>
        </div>
        <hr/>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill='Bootstrap'/>
          <SkillList src={checkMarkIcon} skill='Git'/>
          <SkillList src={checkMarkIcon} skill='Figma'/>
        </div>
        <hr/>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill='Boa comunicação'/>
          <SkillList src={checkMarkIcon} skill='Aprende rápido'/>
          <SkillList src={checkMarkIcon} skill='Boa conduta'/>
          <SkillList src={checkMarkIcon} skill='Resolução rápida'/>
          <SkillList src={checkMarkIcon} skill='Inglês fluente'/>
        </div>
    </section>
  )
}

export default Skills