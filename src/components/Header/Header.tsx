import "./Header.css";
import Logo from "../../assets/logo.png";

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
        <button id="govno_1">
          <h1>asd</h1>
        </button>
        <button id="govno_2">
          <h1>asd</h1>
        </button>
        <button id="enter">
          <h1>Вход</h1>
        </button>
        <button id="space"></button>
      </div>

      {/* <div className="name">
        <div className="name-name">
          <div className="name-name-logo">
            <img src={NameLogo} width={0} height={0} />
          </div>
          <div className="name-name-name">Ботников Евгений Вадимович</div>
        </div>
        <div className="name-exit">
          <img src={NameExit} width={0} height={0} />
        </div>
      </div>*/}
    </header>
  );
}
