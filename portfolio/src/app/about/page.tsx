import Image from 'next/image'
import style from '../../../styles/home.module.css'

function about() {
    return (
        <div className={style.home}>
            <div className={style.image}>
                <Image
                    src="/images/about-image.png"  // Path relative to the public folder
                    alt="Example Image"
                    width={600}  // Specify the width of the image
                    height={500} // Specify the height of the image
                />
            </div>
            <div className={style.para}>
                <h1>About Me</h1>
                <p>
                I'm a Computer Systems Engineering student at NED University with a strong foundation in web development and programming. My skills include HTML, CSS, JavaScript, Python, C, and TypeScript. Currently, I'm focused on advancing my expertise in Django and Next.js to build dynamic and scalable web applications. Passionate about problem-solving and eager to stay updated with the latest technologies, I'm always looking for opportunities to expand my knowledge and refine my skills.
                </p>
            </div>
        </div>
    )
}


export default about;