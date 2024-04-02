import React from "react";
import s from "./about.module.css";
import notebook from "./image/NoteBook.png";
import pencil from "./image/Mechanical_Pencil.png";
import camera from "./image/Camera.png";
const AboutCompany = () => {
  return (
    <>
      <main>
        <div className={s.content}>
          <h3>О компании</h3>
          <p>
            <span style={{ color: "#b2284f", fontWeight: `bolder` }}>
             
              WebStore
            </span>
            — многопрофильная студия дизайна, основанная в 2006 году. За эти
            годы мы успели поработать в разных направлениях, реализовали
            множество проектов, достигли профессиональных высот и собрали
            внушительное портфолио. <br />
            Сегодня мы сосредоточились на том, что нам по-настоящему нравится:
            дизайн и разработка веб-сайтов и мобильных приложений.
          </p>
          <p>
            Мы гордимся своей замечательной командой по-настоящему талантливых
            людей: дизайнеров, программистов, менеджеров, тестировщиков,
            проектировщиков. Все сотрудники{" "}
            <span style={{ color: "#b2284f", fontWeight: `bolder` }}>
             
              WebStore
            </span>
            работают в штате, поэтому мы гарантируем, что весь комплекс работ по
            разработке, созданию, поддержке и продвижению сайтов выполняется
            строго профессионально и качественно.
          </p>
          <p>
            Мы уверены, что хорошая, чёткая и последовательная разработка имеет
            большое значение для эффективного маркетинга. Поэтому предлагаем
            высококачественный дизайн, удобство и функциональность,
            адаптированные под каждого клиента в зависимости от его потребностей
            и поставленных бизнес-задач.
          </p>
        </div>
        <div className={s.image}>
          <img src={camera} alt="" className={s.img} />
          <div className={s.notebook}>
            <img src={notebook} alt="" className={s.img} />
            <img src={pencil} alt="" className={s.imgPencil} />
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutCompany;
