import sty from  '@/styles/Nav.module.css'

const Button = () => {

    const style ={
        btn_add:`p-3 w-[13rem] border border-2 rounded-md border-[#a696e7] bg-[#6f4cff14] ${sty.btn_shadow}`,
        btn_span:`text-white text-center uppercase text-sm p-1`,
    }
  return (
    <button className={style.btn_add}>
        <span className={style.btn_span}>Connect</span>
    </button>
  )
}

export default Button