import MindPoint1 from "../../assets/mindpoint1.png";
import "./Courses.css";

export default function Courses() {
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
        <div className="first-topic_name">Вводное заsнятие</div>
      </div>
    </div>
  );
}
