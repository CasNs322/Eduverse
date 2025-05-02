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
        <div className="content_title">
          <div className="">Знакомство с программой</div>
          <div className=""></div>
        </div>
        <div className="content_video">
          <iframe
            width="901"
            height="515"
            src="https://www.youtube.com/embed/x9GYVG4EJYs"
            title="Основы Figma за 8 минут | Курс по работе с Фигма 2022"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="block1">
          <div className="block1-text">
            Фигма (Figma) — это облачный инструмент для дизайна интерфейсов и
            прототипирования, который стал популярным среди UI/UX-дизайнеров
            благодаря своей простоте, функциональности и возможностям для
            совместной работы. Вот основные особенности Figma: Редактирование в
            реальном времени: Несколько пользователей могут работать над одним
            файлом одновременно, что идеально подходит для командной работы.
            Можно оставлять комментарии и feedback прямо в проекте. Облачная
            платформа: Все файлы хранятся в облаке, поэтому доступ к ним можно
            получить с любого устройства с интернетом. Нет необходимости вручную
            управлять версиями файлов. Кроссплатформенность: Работает на
            Windows, macOS и Linux через браузер или десктопное приложение.
          </div>
          <div className="block1-img"></div>
        </div>
        <div className="block1"></div>
        <div className="block1">
          <div className="block1-img"></div>
          <div className="block1-text"></div>
        </div>
      </div>
    </div>
  );
}
