import style from './About.module.css';
import ImageAbout from '../../assest/about.jpg'
import { useNavigate } from 'react-router-dom';


const About = () => {
    const navigate = useNavigate();
  
    const handleGoBack = () => {
      navigate(-1); // Vuelve a la página anterior en la historia del navegador
    };
    return(
        <div className={style.container}>
            <h1 className={style.h1}>  BIENVENIDO AL ABOUT</h1>
            <img src={ImageAbout} alt="" className={style.image}/>
            <p className={style.text}> App Rick and Morty funcianando</p>
            <button className={style.btn} onClick={handleGoBack}>REGRESAR</button>
        </div> 

    )
}
export default About;