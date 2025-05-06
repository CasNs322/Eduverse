import Point_in_progress from "../../../../assets/points/point_in_progress.png";
import Point_lock from "../../../../assets/points/point_lock.png";
import Endpoint_lock from "../../../../assets/points/endpoint_lock.png";
import "./Figma.css";
import FigmaData from "../../../../content.json";
import Block1_img from "../../../../assets/content/Figma/first/1.jpg";
import Block2_img from "../../../../assets/content/Figma/first/2.jpg";
import { Link } from "react-router";

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
        <div className="content_title">
          <div className="title_figma">
            {FigmaData.lessons.figma.first.title}
          </div>
          <div className="like"></div>
        </div>
        <div className="content_video">
          <iframe
            width="854"
            height="480"
            src={FigmaData.lessons.figma.first.video}
            title="Основы Figma за 8 минут | Курс по работе с Фигма 2022"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="block1">
          <div
            className="block1-text"
            dangerouslySetInnerHTML={{
              __html: FigmaData.lessons.figma.first.paragraf_1,
            }}
          ></div>
          <div className="block1-">
            <img src={Block1_img} className="block1-img" />
          </div>
        </div>
        <div className="block1">
          <div
            className="block2-text"
            dangerouslySetInnerHTML={{
              __html: FigmaData.lessons.figma.first.paragraf_2,
            }}
          ></div>
        </div>
        <div className="block1">
          <div className="block1-">
            <img src={Block2_img} className="block1-img" />
          </div>
          <div
            className="block1-text"
            dangerouslySetInnerHTML={{
              __html: FigmaData.lessons.figma.first.paragraf_3,
            }}
          ></div>
        </div>
        <div className="buttons">
          <Link to="">
            <div className="button-next">Далее</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
