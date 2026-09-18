const contacts = [
  {
    label: 'Telegram',
    value: '@Lena_3366',
    href: 'https://t.me/Lena_3366',
    note: 'Найшвидший спосіб звʼязку',
  },
  {
    label: 'Email',
    value: 'dzugan1981@gmail.com',
    href: 'mailto:dzugan1981@gmail.com',
    note: 'Для брифів, рахунків і документів',
  },
]

export default function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <div className="contacts__cta reveal">
          <div className="contacts__cta-text">
            <span className="section-num">08</span>
            <h2>Розкажіть, що треба впорядкувати</h2>
            <p>
              Напишіть у двох реченнях, де зараз болить: заявки, реклама,
              автоматизація чи звітність. Повернемось із питаннями по брифу
              та планом робіт.
            </p>
          </div>
          <div className="contacts__cards">
            {contacts.map((c) => (
              <a key={c.label} href={c.href} className="contact-card">
                <div className="contact-card__label">{c.label}</div>
                <div className="contact-card__value">{c.value}</div>
                <div className="contact-card__note">{c.note}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
