import Image from 'next/image'
import style from '../../../styles/home.module.css'
function home() {
    return (
        <div className={style.home}>
            <div className={style.image}>
                <Image
                    src="/images/hero-imageB.png"  // Path relative to the public folder
                    alt="Example Image"
                    width={600}  // Specify the width of the image
                    height={500} // Specify the height of the image
                />
            </div>
            <div className={style.heading}>
                <h2>This is<br/> Muhammad Owais.</h2>
            </div>
        </div>
    )
}


export default home;