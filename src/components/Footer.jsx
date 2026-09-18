export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="logo logo--footer">
            <span className="logo__mark">P</span>
            <span className="logo__text">
              Pulsar <span className="logo__sub">Agency</span>
            </span>
          </a>
          <p className="footer__tagline">
            CRM, реклама, AI та аналітика для команд, які хочуть бачити продажі
            в цифрах, а не у відчуттях.
          </p>
        </div>
        <nav className="footer__nav">
          <a href="#services">Послуги</a>
          <a href="#packages">Пакети</a>
          <a href="#faq">Питання</a>
          <a href="#contacts">Контакти</a>
          <a href="#/offer">Публічна оферта</a>
        </nav>
      </div>
      <div className="container footer__bottom">
        <p>
          © {new Date().getFullYear()} ФОП Джуган Олена Анатоліївна. Всі права
          захищені.
        </p>
      </div>
    </footer>
  )
}
