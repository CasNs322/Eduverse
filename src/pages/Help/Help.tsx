import "./Help.css";

export default function Help() {
  return (
    <div className="Help">
      <div className="help">
        <div className="title-help">ФОРМА ОБРАТНОЙ СВЯЗИ</div>
        <div className="subtitle-help">Поля обязательные для заполнения</div>
        <form action="" method="post" id="FormHelp">
          <input type="text" id="FIO" name="FIO" placeholder="ФИО" />
          <div className="strok">
            <input type="email" id="Email" name="Email" placeholder="Email" />
            <input type="tel" id="Number" name="number" placeholder="Телефон" />
          </div>
          <textarea id="TextError" name="TextError" placeholder="Сообщение" />
          <div className="button-help">
            <button type="reset" className="reset-help">
              Сбросить
            </button>
            <button type="submit" className="submit-help">
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
