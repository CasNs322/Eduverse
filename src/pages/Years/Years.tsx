import "./Years.css";

import Lvl1 from "../../assets/years/1.png";
import Lvl2 from "../../assets/years/2.png";
import Lvl3 from "../../assets/years/3.png";
import { Link } from "react-router";

export default function Years() {
  return (
    <div className="courses">
      <div className="coursestitle">Год обучения</div>
      <div className="strok1_courses">
        <div className="kvantym">
          <div className="coursesimg">
            <img src={Lvl1}></img>
          </div>
          <div className="coursestext">Стартовый</div>
        </div>
        <Link to="/direction">
          <div className="kvantym">
            <div className="coursesimg">
              <img src={Lvl2}></img>
            </div>
            <div className="coursestext">Базовый</div>
          </div>
        </Link>
        <div className="kvantym">
          <div className="coursesimg">
            <img src={Lvl3}></img>
          </div>
          <div className="coursestext">Продвинутый</div>
        </div>
      </div>
    </div>
  );
}
