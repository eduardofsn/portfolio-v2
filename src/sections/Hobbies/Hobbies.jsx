import styles from './HobbiesStyles.module.css'

function Hobbies() {
  return (
    <section id='hobbies' className={styles.container}>
        <div className={styles.hobbiesList}>
            <h1>Hobbies</h1>
            <br/>
            <ul>
                <li>Jogos 🕹️</li>
                <li>Programação ⌨</li>
                <li>Leitura 📚</li>
                <li>Escrita ✏️</li>
            </ul>
        </div>
    </section>
)
}

export default Hobbies