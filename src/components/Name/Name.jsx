import "./Name.css";
import NameLogo from "../../assets/";
import NameExit from "../../assets/";

export function Name() {
  return (
    <div className="name">
      <div className="name-name">
        <div className="name-name-logo">
          <img src={NameLogo} width={0} height={0} />
        </div>
        <div className="name-name-name"></div>
      </div>
      <div className="name-exit">
        <img src={NameExit} width={0} height={0} />
      </div>
    </div>
  );
}
