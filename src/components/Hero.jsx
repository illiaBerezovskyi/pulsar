const tiles = [
  { value: '40+', label: 'налаштованих воронок' },
  { value: '×2.6', label: 'зростання конверсії' },
  { value: '10 днів', label: 'до першого дашборду' },
  { value: '24/7', label: 'працює автоматизація' },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid-bg" aria-hidden />
      <div className="hero__glow hero__glow--1" aria-hidden />
      <div className="hero__glow hero__glow--2" aria-hidden />
      <div className="container hero__inner">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          CRM · Реклама · AI · Аналітика
        </div>
        <h1>
          Система продажів, у якій
          <br />
          <span className="accent">видно кожну гривню</span>
        </h1>
        <p className="hero__sub">
          Наводимо лад у заявках, рекламі та звітах: замість здогадок — цифри,
          замість ручної рутини — автоматизація, замість хаосу — процес.
        </p>
        <div className="hero__actions">
          <a href="#contacts" className="btn btn--primary btn--lg">
            Обговорити проєкт <span aria-hidden>→</span>
          </a>
          <a href="#calculator" className="btn btn--outline btn--lg">
            Порахувати потенціал
          </a>
        </div>
        <div className="hero__tiles">
          {tiles.map((t) => (
            <div key={t.label} className="hero__tile">
              <div className="hero__tile-value">{t.value}</div>
              <div className="hero__tile-label">{t.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
