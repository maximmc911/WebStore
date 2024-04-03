import s from './footer.module.css'
import map from './image/Group_1.png'
const Footer = () => {
    return (
        <>
            <footer>
                <div className={s.container}>
                    <img src={map} alt="" className={s.img} />
                </div>
                <div className={s.contacts}>
                    <div>
                        <div className={s.adress}>
                            <p>Адрес:</p>
                            <address style={{ paddingTop: `10px` }}>
                                г. Москва, <br />
                                ул. Дербеневская, дом 1, строение 6, подъезд 4, этаж 2.
                            </address>

                        </div>
                        <div className={s.tel}>
                            <p>Телефоны:</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: `10px`, paddingTop: `10px` }}>
                                <a href="tel:+74959260126">+7 (495) 926-01-26</a>
                                <a href="tel:+74956460094">+7 (495) 646-00-94</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={s.email}>

                            <p>E-mail:</p>
                            <a href="mailo:info@nologostudio.ru">info@nologostudio.ru</a>
                        </div>
                        <div className={s.skype}>

                            <p>Skype:</p>
                            <a href="skype:info@nologostudio.ru?chat">info@nologostudio.ru</a>
                        </div>
                        <h6>© 1997-2014 WebStore</h6>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer