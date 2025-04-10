import "./Enter.css";
import Image from "../../assets/image.png";

export function Enter() {
  return (
    <div className="forma2">
      <div className="image">
        <img src={Image}></img>
      </div>
      <div id="title">Вход в систему</div>
      <div className="forma">
        <form action="">
          <div className="username">
            <input
              type="text"
              placeholder="Имя пользователя"
              name="UserName"
              id="UserName"
            />
          </div>
          <div className="password">
            <input
              type="Password"
              name="Password"
              id="Password"
              placeholder="Пароль"
            />
          </div>
          <div className="zapomnit">
            <div className="checkbox">
              <input type="checkbox" name="zapomni" id="zapomni" />
            </div>
            <div className="info">
              <p>Запомнить меня</p>
            </div>
          </div>
          <div className="zabl">
            <button type="button">Забыли пароль?</button>
          </div>
          <div className="submit">
            <button type="submit" className="submit">Авторизация</button>
          </div>
        </form>
      </div>
    </div>
  );
}
