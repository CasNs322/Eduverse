import "./Header.css";
import Logo from "../../assets/logo.png";
import NameLogo from "../../assets/namelogo.png";
import NameExit from "../../assets/nameexit.png";

export function Header() {
  return (
    <header>
      {/* меню */}
      <div id="menu">
        <button id="logo">
          <img src={Logo} width={110}></img>
        </button>
        <button id="kyrs">
          <h1>Курсы</h1>
        </button>
        <button id="favourites">Избранное</button>
        <button id="help">Помощь</button>
        <button id="enter">
          <h1>Вход</h1>
        </button>
        <button id="space">
          <div className="name">
            <div className="name-name">
              <div className="name-name-logo">
                <img src={NameLogo} />
              </div>
              <div className="name-name-name">Ботников Евгений Вадимович</div>
            </div>
            <div className="name-exit">
              <img src={NameExit} />
            </div>
          </div>
        </button>
      </div>
    </header>
  );
}
