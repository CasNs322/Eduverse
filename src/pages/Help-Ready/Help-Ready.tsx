import { Link } from "react-router";
import "./Help-Ready.css";

export default function Help_Ready() {
  return (
    <div className="Help">
      <div className="help">
        <div className="title-help">ФОРМА ОБРАТНОЙ СВЯЗИ</div>
        <div className="subtitle-ready">
          <div className="first-strok">Ваша заявка отправлена.</div>
          <div className="second-strok">Ожидайте ответа</div>
        </div>
        <Link to="/courses">
          <div className="button-ready">
            <button id="button-ready">На главную</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
