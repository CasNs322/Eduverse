import MindPoint1 from "../../assets/mindpoint1.png";
import "./Figma.css";

export default function Figma() {
  return (
    <div className="right-menu">
      <div className="name-courses">
        <h1>Web</h1>
      </div>
      <div className="menu-chapter">
        <h2>Введение</h2>
      </div>
      <div className="first-topic">
        <div className="first-point">
          <img src={MindPoint1} />
        </div>
        <div className="first-topic_name">Вводное занятие</div>
      </div>
    </div>
  );
}
