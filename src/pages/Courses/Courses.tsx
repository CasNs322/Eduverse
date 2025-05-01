import "./Courses.css";
import Avto from "../../assets/courses/avto.png";
import Aero from "../../assets/courses/aero.png";
import IT from "../../assets/courses/it.png";
import Promdis from "../../assets/courses/promdis.png";
import VR from "../../assets/courses/vr.png";
import Geo from "../../assets/courses/geo.png";
import Nano from "../../assets/courses/nano.png";
import Hi from "../../assets/courses/hi.png";
import Energy from "../../assets/courses/energy.png";
import Promrobo from "../../assets/courses/promrobo.png";
import KODiYM from "../../assets/courses/kodiym.png";
import PKiM from "../../assets/courses/pkim.png";
import Math from "../../assets/courses/math.png";
import Chess from "../../assets/courses/chess.png";
import English from "../../assets/courses/english.png";
import Eco from "../../assets/courses/eco.png";
import { Link } from "react-router";

export default function Courses() {
  return (
    <div className="courses">
      <div className="coursestitle">Курсы</div>
      <div className="strok1_courses">
        <div className="kvantym">
          <div className="coursesimg">
            <img src={Avto}></img>
          </div>
          <div className="coursestext">Автоквантум</div>
        </div>
        <div className="kvantym">
          <div className="coursesimg">
            <img src={Aero}></img>
          </div>
          <div className="coursestext">Аэроквантум</div>
        </div>
        <Link to="/years">
          <div className="kvantym">
            <div className="coursesimg">
              <img src={IT}></img>
            </div>
            <div className="coursestext">IT-квантум</div>
          </div>
        </Link>
        <div className="kvantym">
          <div className="coursesimg">
            <img src={Promdis}></img>
          </div>
          <div className="coursestext2">Промдизайн квантум</div>
        </div>
        <div className="kvantym">
          <div className="coursesimg">
            <img src={VR}></img>
          </div>
          <div className="coursestext2">VR/AR квантум</div>
        </div>
        <div className="kvantym">
          <div className="coursesimg">
            <img src={Geo}></img>
          </div>
          <div className="coursestext">Геоквантум</div>
        </div>
        <div className="kvantym">
          <div className="coursesimg">
            <img src={Nano}></img>
          </div>
          <div className="coursestext">Наноквантум</div>
        </div>
        <div className="kvantym">
          <div className="coursesimg">
            <img src={Hi}></img>
          </div>
          <div className="coursestext">Хайтек</div>
        </div>
      </div>
      <div className="strok2_courses">
        <div className="kvantym">
          <div className="coursesimg">
            <img src={Energy}></img>
          </div>
          <div className="coursestext2">Энерджи квантум</div>
        </div>
        <div className="kvantym">
          <div className="coursesimg">
            <img src={Promrobo}></img>
          </div>
          <div className="coursestext2">Промробо квантум</div>
        </div>
        <div className="kvantym">
          <div className="coursesimg">
            <img src={KODiYM}></img>
          </div>
          <div className="coursestext">КОДиУМ</div>
        </div>
        <div className="kvantym">
          <div className="coursesimg">
            <img src={PKiM}></img>
          </div>
          <div className="coursestext">ПКиМ</div>
        </div>
        <div className="kvantym">
          <div className="coursesimg">
            <img src={Math}></img>
          </div>
          <div className="coursestext">Математика</div>
        </div>
        <div className="kvantym">
          <div className="coursesimg">
            <img src={Chess}></img>
          </div>
          <div className="coursestext">Шахматы</div>
        </div>
        <div className="kvantym">
          <div className="coursesimg">
            <img src={English}></img>
          </div>
          <div className="coursestext2">Технический Английский</div>
        </div>
        <div className="kvantym">
          <div className="coursesimg">
            <img src={Eco}></img>
          </div>
          <div className="coursestext">Экономика</div>
        </div>
      </div>
    </div>
  );
}
