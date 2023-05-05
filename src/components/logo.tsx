import Image from 'next/image'
import logo from '/public/polygon.svg'
import Link from 'next/link';


const Logo = () => {

    const style = {
        logo: `inline-flex items-center`,
        logo_tx: `text-3xl font-raj font-semibold tracking-wider text-white`,
        logo_span:`text-logo-gradient`,
    }
  return (
    <Link className={style.logo} title='logo' href="/">
        <Image className='mr-1' height={40}  src={logo}  alt="logo" />
        <h2 className={style.logo_tx}>Poly<span className={style.logo_span}>ace</span></h2>
    </Link>
  )
}

export default Logo