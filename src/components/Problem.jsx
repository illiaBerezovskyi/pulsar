const pains = [
  'Заявки губляться в месенджерах і нотатках',
  'Незрозуміло, яка реклама приносить гроші, а яка з’їдає бюджет',
  'Менеджери півдня переписують дані руками',
  'Звіт про продажі збирається два дні й одразу застаріває',
]

const gains = [
  'Кожна заявка в CRM: джерело, статус, відповідальний, наступний крок',
  'Реклама з UTM-розміткою і вартістю ліда по кожному каналу',
  'AI та автоматизація знімають рутину з команди',
  'Дашборд оновлюється сам — цифри під рукою щодня',
]

export default function Problem() {
  return (
    <section className="problem">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-num">01</span>
          <h2>Як є зараз і як буде</h2>
          <p>
            Більшість бізнесів втрачають гроші не на ринку, а всередині —
            у місцях, де ніхто не дивиться.
          </p>
        </div>
        <div className="problem__cols reveal">
          <div className="problem__col problem__col--before">
            <div className="problem__label">Без системи</div>
            <ul>
              {pains.map((p) => (
                <li key={p}>
                  <span className="problem__icon problem__icon--minus">—</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="problem__arrow" aria-hidden>
            →
          </div>
          <div className="problem__col problem__col--after">
            <div className="problem__label">Із системою</div>
            <ul>
              {gains.map((g) => (
                <li key={g}>
                  <span className="problem__icon problem__icon--plus">✓</span>
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
