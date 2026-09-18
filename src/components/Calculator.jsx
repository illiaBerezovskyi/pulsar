import { useState } from 'react'

const fmt = new Intl.NumberFormat('uk-UA')

export default function Calculator() {
  const [leads, setLeads] = useState(250)
  const [conversion, setConversion] = useState(10)
  const [check, setCheck] = useState(1200)
  const [spend, setSpend] = useState(3000)

  const deals = Math.round((leads * conversion) / 100)
  const revenue = deals * check
  const romi = Math.round(((revenue - spend) / spend) * 100)

  const newConversion = Math.min(conversion + 7, 100)
  const newDeals = Math.round((leads * newConversion) / 100)
  const newRevenue = newDeals * check
  const newRomi = Math.round(((newRevenue - spend) / spend) * 100)

  const delta = newRevenue - revenue

  return (
    <section className="calc" id="calculator">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-num">06</span>
          <h2>Порахуйте потенціал своєї воронки</h2>
          <p>
            Поставте повзунки під свої цифри. Модель показує ефект від зростання
            конверсії на +7 в.п. — типовий результат після наведення ладу
            в процесах.
          </p>
        </div>
        <div className="calc__panel reveal">
          <div className="calc__controls">
            <label className="calc__field">
              <div className="calc__label">
                <span>Заявок на місяць</span>
                <strong>{fmt.format(leads)}</strong>
              </div>
              <input
                type="range"
                min="20"
                max="2000"
                step="10"
                value={leads}
                onChange={(e) => setLeads(+e.target.value)}
              />
            </label>
            <label className="calc__field">
              <div className="calc__label">
                <span>Конверсія в угоду</span>
                <strong>{conversion}%</strong>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={conversion}
                onChange={(e) => setConversion(+e.target.value)}
              />
            </label>
            <label className="calc__field">
              <div className="calc__label">
                <span>Середній чек</span>
                <strong>${fmt.format(check)}</strong>
              </div>
              <input
                type="range"
                min="100"
                max="20000"
                step="100"
                value={check}
                onChange={(e) => setCheck(+e.target.value)}
              />
            </label>
            <label className="calc__field">
              <div className="calc__label">
                <span>Витрати на рекламу</span>
                <strong>${fmt.format(spend)}</strong>
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="100"
                value={spend}
                onChange={(e) => setSpend(+e.target.value)}
              />
            </label>
          </div>

          <div className="calc__out">
            <div className="calc__scenarios">
              <div className="calc__scenario">
                <div className="calc__scenario-name">Зараз</div>
                <div className="calc__scenario-row">
                  <span>Угоди</span>
                  <strong>{fmt.format(deals)}</strong>
                </div>
                <div className="calc__scenario-row">
                  <span>Виручка</span>
                  <strong>${fmt.format(revenue)}</strong>
                </div>
                <div className="calc__scenario-row">
                  <span>ROMI</span>
                  <strong>{fmt.format(romi)}%</strong>
                </div>
              </div>
              <div className="calc__scenario calc__scenario--accent">
                <div className="calc__scenario-name">Із системою</div>
                <div className="calc__scenario-row">
                  <span>Угоди</span>
                  <strong>{fmt.format(newDeals)}</strong>
                </div>
                <div className="calc__scenario-row">
                  <span>Виручка</span>
                  <strong>${fmt.format(newRevenue)}</strong>
                </div>
                <div className="calc__scenario-row">
                  <span>ROMI</span>
                  <strong>{fmt.format(newRomi)}%</strong>
                </div>
              </div>
            </div>
            <div className="calc__delta">
              <div className="calc__delta-value">+${fmt.format(delta)}</div>
              <div className="calc__delta-label">
                додаткової виручки на місяць при тому ж бюджеті
              </div>
            </div>
            <a href="#contacts" className="btn btn--primary btn--block">
              Хочу таку систему <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
