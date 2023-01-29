import styles from './App.module.css'

function App() {

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.contactContainer}>
          <img src="https://github.com/alequisk.png" alt="Profile picture" width={48} height={48} className={styles.profileImg} />
          <div className={styles.contantInfo}>
            <p>Álex Sousa Cruz</p>
            <div>
              {/* online before */}
              <span> Online</span>
            </div>
          </div>
        </div>
        <div className={styles.closeButton}>
          <p>&times;</p>
        </div>
      </header>
      <div className={styles.chat}>
        <div className={styles.messages}>
          <span>Hoje 11:30</span>
          {/* ----------- */}
          <div className={styles.receivedChat}>
            <p>Álex - 10:49 AM</p>
            <div>
              <p>Tive uma ideia incrível para um projeto! 😍</p>
            </div>
          </div>
          {/* ----------- */}
          <div className={styles.sendChat}>
            <p>Você - 10:49 AM</p>
            <div>
              <p>Sério? Me conta mais.</p>
            </div>
          </div>
          {/* ----------- */}
          <div className={styles.receivedChat}>
            <p>Álex - 10:49 AM</p>
            <div>
              <p>E se a gente fizesse um chat moderno e responsivo em apenas uma semana?</p>
            </div>
          </div>
          {/* ----------- */}
          <div className={styles.sendChat}>
            <p>Você - 10:49 AM</p>
            <div>
              <p>#boraCodar! 🚀</p>
            </div>
          </div>
          
        </div>
        <div className={styles.footerContainer}>
          <input type="text" name="message" placeholder="Digite sua mensagem " />
          <div>
          <svg width="22" height="19" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.3402 8.6429L22.3327 8.63962L2.31328 0.336184C2.1449 0.265707 1.96167 0.238066 1.77999 0.255736C1.59831 0.273405 1.42384 0.335832 1.27219 0.437434C1.11197 0.542419 0.980359 0.685591 0.889207 0.854067C0.798055 1.02254 0.750218 1.21104 0.75 1.40259V6.71306C0.750089 6.97493 0.841528 7.22856 1.00856 7.43024C1.17558 7.63192 1.40774 7.76902 1.665 7.8179L12.5836 9.83681C12.6265 9.84494 12.6652 9.8678 12.6931 9.90143C12.7209 9.93506 12.7362 9.97736 12.7362 10.021C12.7362 10.0647 12.7209 10.107 12.6931 10.1406C12.6652 10.1743 12.6265 10.1971 12.5836 10.2052L1.66547 12.2242C1.40828 12.2729 1.17614 12.4098 1.00903 12.6113C0.841932 12.8128 0.750328 13.0663 0.75 13.3281V18.6395C0.749876 18.8224 0.795166 19.0025 0.881807 19.1636C0.968448 19.3246 1.09373 19.4617 1.24641 19.5624C1.43006 19.6845 1.6456 19.7497 1.86609 19.7499C2.01939 19.7498 2.1711 19.719 2.31234 19.6595L22.3313 11.4034L22.3402 11.3992C22.6096 11.2833 22.8392 11.0911 23.0006 10.8461C23.1619 10.6012 23.2479 10.3143 23.2479 10.021C23.2479 9.72773 23.1619 9.44086 23.0006 9.19592C22.8392 8.95098 22.6096 8.75871 22.3402 8.6429V8.6429Z" fill="#E1E1E6"/>
          </svg>

          </div>
        </div>
      </div>
    </main>
  )
}

export default App
