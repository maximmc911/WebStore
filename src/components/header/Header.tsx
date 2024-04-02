import s from './header.module.css'
import img from './image/iMac 3_4 view right.png'
const Header = () => {
  return (
    <>
      <header>
        <div className={s.container}>
        </div>
        <div className={s.content}>

          <h1>Корпоративный <br /> сайт <br /> <span style={{ fontWeight: 100 }}>от</span> <br /><span style={{ color: `#3f3f3f`, fontWeight: `900`, fontSize: `25px` }}>50000</span> <br /><span style={{ fontWeight: 100 }}>рублей</span> <br /></h1>

          <img src={img} alt="" className={s.img} />
          <button className={s.btn}>Заказать сайт</button>
        </div>
      </header>
    </>
  )
}

export default Header