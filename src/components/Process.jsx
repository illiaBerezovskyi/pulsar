const steps = [
  {
    num: '01',
    title: 'Знайомство',
    text: 'Коротка розмова: що продаєте, де зараз вузьке місце, які цілі на квартал.',
  },
  {
    num: '02',
    title: 'Аудит',
    text: 'Дивимось воронку, рекламу та звіти. Фіксуємо, де саме губляться заявки й бюджет.',
  },
  {
    num: '03',
    title: 'Впровадження',
    text: 'Налаштовуємо CRM, запускаємо кампанії, підключаємо автоматизацію та дашборди.',
  },
  {
    num: '04',
    title: 'Передача',
    text: 'Навчаємо команду, віддаємо інструкції та регламенти, лишаємось на звʼязку.',
  },
]

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-num">04</span>
          <h2>Як проходить робота</h2>
          <p>
            Повністю онлайн. Кожен етап закінчується зрозумілим результатом:
            структура, налаштування, інструкція або звіт.
          </p>
        </div>
        <div className="timeline stagger reveal">
          {steps.map((s) => (
            <div key={s.num} className="timeline__step">
              <div className="timeline__dot">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
