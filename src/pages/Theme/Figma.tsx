import Point_in_progress from "../../assets/points/point_in_progress.png";
import Point_lock from "../../assets/points/point_lock.png";
import Endpoint_lock from "../../assets/points/endpoint_lock.png";
import "./Figma.css";

export default function Figma() {
  return (
    <div className="main">
      <div className="right-menu">
        <div className="name-courses">Web</div>
        <div className="menu-chapter">Figma</div>
        <div className="mappoint-themes">
          <div className="mappoint">
            <div className="point">
              <img src={Point_in_progress} />
            </div>
            <div className="point">
              <img src={Point_lock} />
            </div>
            <div className="point">
              <img src={Point_lock} />
            </div>
            <div className="point">
              <img src={Point_lock} />
            </div>
            <div className="point">
              <img src={Endpoint_lock} />
            </div>
          </div>
          <div className="themes">
            <div className="theme">Знакомство с программой</div>
            <div className="theme">Составление макета сайта</div>
            <div className="theme">Составление макета сайта</div>
            <div className="theme">Составление макета сайта</div>
            <div className="theme">Итоговый кейс</div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="content_title"></div>
        <div className="content_video"></div>
        <div className="block1"></div>
        <div className="block1"></div>
        <div className="block1"></div>
        <div className=""></div>
      </div>
    </div>
  );
}
