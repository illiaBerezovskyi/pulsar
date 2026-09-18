const items = [
  {
    tag: 'CRM',
    title: 'Заявки',
    text: 'Воронка, етапи, статуси й автозадачі — жодна заявка не зникає.',
  },
  {
    tag: 'ADS',
    title: 'Трафік',
    text: 'Кампанії з розміткою та зрозумілою вартістю ліда по кожному каналу.',
  },
  {
    tag: 'AI',
    title: 'Автоматизація',
    text: 'Асистенти, шаблони відповідей і сценарії, що працюють без вихідних.',
  },
  {
    tag: 'BI',
    title: 'Цифри',
    text: 'Дашборди та звіти: витрати, конверсії, виручка по менеджерах.',
  },
]

export default function Directions() {
  return (
    <section className="dir">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-num">02</span>
          <h2>Чотири блоки однієї системи</h2>
          <p>
            Працюють разом і обмінюються даними — без ручного перенесення між
            таблицями.
          </p>
        </div>
        <div className="dir__grid stagger reveal">
          {items.map((it) => (
            <div key={it.tag} className="dir__card">
              <div className="dir__tag">{it.tag}</div>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </div>
          ))}
        </div>
        <div className="dir__note reveal">
          <span className="dir__note-dot" />
          Працюємо онлайн по всій Україні
        </div>
      </div>
    </section>
  )
}
