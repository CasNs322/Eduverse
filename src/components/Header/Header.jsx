import "./Header.css";
import Logo from "../../assets/logo.png";

export function Header() {
  return (
    <header>
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
    </header>
  );
}
