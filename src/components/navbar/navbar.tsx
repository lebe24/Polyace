import Logo from '@/components/logo'
import Button from '@/components/button'
import sty from  '@/styles/Nav.module.css'
import Link from 'next/link';
import MenuItem from "./item";
import {useState , useContext} from 'react'




const Navbar = () => {
  const style ={
    wrapper :`bg-mainBg  w-full border-b top-0 border-slate-400/5 z-20 shadow-lg text-2xl`,
    container: `px-4 py-5 mx-auto animate-fade-in-up sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8`,
    nav:`relative flex items-center justify-between`,
    ul:`flex font-medium items-center text-slate-300 uppercase space-x-8`,
    // ul:`hidden mf:flex font-medium items-center text-slate-300 uppercase space-x-8`,
    li: `tracking-wide ${sty.hoverEffect}`,
    btn_tog:`absolute right-6 mf:hidden top-[5px] scale-150`
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const showMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.nav}>
          <Logo/>
          <ul className={style.ul}>
              <li>
                  <Link className={style.li} href="/buytoken">
                    Buy Token
                  </Link>
              </li>
              <li>
                  <Link className={style.li} href="/buytoken">
                    Buy Token
                  </Link>
              </li>
              <li>
                  <Link className={style.li} href="/buytoken">
                    Buy Token
                  </Link>
              </li>
          </ul>

          {/* Buttton-connect */}
          <Button/>

          {/* Toggler */}

          <div className={style.btn_tog}>
            <button className={isMenuOpen ?  "menu opened" : "menu"} onClick={showMenu} aria-label="Main Menu">
            <svg width="30" height="30" viewBox="0 -16 100 100">
                <path
                  className="line line1"
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                />
                <path className="line line2" d="M 20,50 H 80" />
                <path
                  className="line line3"
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <MenuItem
        showMenu={showMenu}
        active={isMenuOpen}
      />
    </div>
  )
}

export default Navbar