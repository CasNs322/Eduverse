import "./Direction.css";

import Web from "../../assets/direction/web.png";
import Game from "../../assets/direction/game.png";
import App from "../../assets/direction/app.png";
import { Link } from "react-router";

export default function Years() {
  return (
    <div className="courses">
      <div className="coursestitle">Направление</div>
      <div className="strok1_courses">
        <Link to="/figma">
          <div className="kvantym">
            <div className="coursesimg">
              <img src={Web}></img>
            </div>
            <div className="coursestext2">Разработка сайтов</div>
          </div>
        </Link>
        <div className="kvantym">
          <div className="coursesimg">
            <img src={Game}></img>
          </div>
          <div className="coursestext2">Разработка игр</div>
        </div>
        <div className="kvantym">
          <div className="coursesimg">
            <img src={App}></img>
          </div>
          <div className="coursestext2">Разработка приложений</div>
        </div>
      </div>
    </div>
  );
}
