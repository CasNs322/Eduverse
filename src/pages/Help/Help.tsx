import "./Help.css";

export default function Help() {
  return (
    <div className="Help">
      <div className="help">
        <div className="title">ФОРМА ОБРАТНОЙ СВЯЗИ</div>
        <div className="subtitle">Поля обязательные для заполнения</div>
        <form action="" method="post" id="help">
          <input type="text" id="FIO" name="FIO" placeholder="ФИО" />
          <input type="email" id="Email" name="Email" placeholder="Email" />
          <input type="tel" id="number" name="number" placeholder="Телефон" />
          <input
            type="text"
            id="TextError"
            name="TextError"
            placeholder="Сообщение"
          />
          <button type="reset">Сбросить</button>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
}
