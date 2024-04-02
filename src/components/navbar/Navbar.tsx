import s from './navbar.module.css'
import phone from './image/Shape 62.png'
interface reference {
    name: string,
    reference: string,
}
const Navbar = () => {
    const menu: Array<reference> = [
        {
            name: `компания`,
            reference: `!#`,
        },
        {
            name: `Услуги`,
            reference: `!#`,
        },
        {
            name: `работы`,
            reference: `!#`,
        },
        {
            name: `контакты`,
            reference: `!#`,
        },
    ];

    return (
        <>
            <nav>

                <div className={s.logo}>
                    <div className={s.logo_font}>
                        <h1 className={s.font_bold}>Web</h1>
                        <h1 className={s.font}>Store</h1>
                    </div>
                    <div className={s.contants}>
                        <div className={s.logo_tel}>
                            <img src={phone} alt="tel" className={s.logo_img} />
                            <a href="tel:+74959260126">+7 (495) 926-01-26</a>
                        </div>
                        <button className={s.btn}>Заказать сайт</button>
                    </div>
                </div>



                <ul className={s.nav_menu}>
                    {menu.map((e: reference, index: number) => (
                        <li className={s.menu_item} key={index}>{e.name}</li>

                    ))}
                </ul>

            </nav>
        </>
    )
}

export default Navbar