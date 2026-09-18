const packages = [
  {
    name: 'Старт',
    tagline: 'Коли треба навести лад у заявках',
    items: [
      'Аудит поточної воронки',
      'Базове налаштування CRM',
      'Етапи, статуси, автозадачі',
      'Інструкція для команди',
    ],
  },
  {
    name: 'Система',
    tagline: 'CRM, реклама та аналітика разом',
    featured: true,
    items: [
      'Все з пакета «Старт»',
      'Запуск і ведення реклами',
      'UTM-розмітка та вартість ліда',
      'Дашборд ключових метрик',
      'Сценарії AI-автоматизації',
    ],
  },
  {
    name: 'Партнерство',
    tagline: 'Коли потрібен постійний супровід',
    items: [
      'Все з пакета «Система»',
      'Щомісячний розбір цифр',
      'Оптимізація кампаній',
      'Розвиток автоматизацій',
      'Пріоритетна підтримка',
    ],
  },
]

export default function Packages() {
  return (
    <section className="pack" id="packages">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-num">05</span>
          <h2>Формати співпраці</h2>
          <p>
            Вартість і строки рахуємо після брифу та аудиту — під реальний обсяг
            робіт, без прихованих платежів.
          </p>
        </div>
        <div className="pack__grid stagger reveal">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`pack__card ${p.featured ? 'pack__card--featured' : ''}`}
            >
              {p.featured && <div className="pack__badge">Найчастіше обирають</div>}
              <h3>{p.name}</h3>
              <p className="pack__tagline">{p.tagline}</p>
              <ul>
                {p.items.map((i) => (
                  <li key={i}>
                    <span className="pack__check">✓</span>
                    {i}
                  </li>
                ))}
              </ul>
              <a
                href="#contacts"
                className={`btn ${p.featured ? 'btn--primary' : 'btn--outline'} btn--block`}
              >
                Дізнатись вартість
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
