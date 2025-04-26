import "./Header.css";
import Logo from "../../assets/logo.png";
import NameLogo from "../../assets/namelogo.png";
import NameExit from "../../assets/nameexit.png";
import { Link } from "react-router";

export function Header() {
  return (
    <header>
      {/* меню */}
      <div id="menu">
        <button id="logo">
          <img src={Logo} width={110}></img>
        </button>
        <Link to="/courses">
          <button id="kyrs">
            <h1>Курсы</h1>
          </button>
        </Link>
        <Link to="/likes">
          <button id="favourites">Избранное</button>
        </Link>
        <Link to="/help">
          <button id="help">Помощь</button>
        </Link>
        <Link to="/enter">
          <button id="enter">
            <h1>Вход</h1>
          </button>
        </Link>
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
