import style from './About.module.css';
import ImageAbout from '../../assest/about.jpg'


const About = ( ) => {
    return(
        <div className={style.container}>
            <h1 className={style.h1}>  BIENVENIDO AL ABOUT</h1>
            <img src={ImageAbout} alt="" className={style.image}/>
            <p className={style.text}> App Rick and Morty funcianando</p>
            <button className={style.btn}>REGRESAR</button>
        </div> 

    )
}
export default About;